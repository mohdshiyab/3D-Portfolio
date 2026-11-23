import { getDb, isFirebaseConfigured } from '../lib/firebase';

const SUBMISSION_COOLDOWN_MS = 30 * 1000; // 30 seconds cooldown between submissions

/**
 * Basic text sanitizer to prevent script injection
 */
function sanitizeText(str) {
  return (str || '')
    .replace(/[<>]/g, '') // Strip brackets
    .trim();
}

/**
 * Saves a contact form message to Firebase Cloud Firestore.
 * Firestore is dynamically imported on demand to avoid inflating initial page load.
 * @param {Object} messageData
 * @param {string} messageData.name
 * @param {string} messageData.email
 * @param {string} messageData.subject
 * @param {string} messageData.message
 * @returns {Promise<{success: boolean, id: string}>}
 */
export async function saveContactMessage({ name, email, subject, message }) {
  // 1. Client-side anti-spam throttle check
  const lastSubmit = sessionStorage.getItem('last_contact_submission');
  if (lastSubmit) {
    const elapsed = Date.now() - parseInt(lastSubmit, 10);
    if (elapsed < SUBMISSION_COOLDOWN_MS) {
      const waitSeconds = Math.ceil((SUBMISSION_COOLDOWN_MS - elapsed) / 1000);
      throw new Error(`Please wait ${waitSeconds}s before submitting another message.`);
    }
  }

  // 2. Validate and sanitize input fields
  const cleanName = sanitizeText(name).slice(0, 100);
  const cleanEmail = (email || '').trim().toLowerCase().slice(0, 120);
  const cleanSubject = sanitizeText(subject || 'General Inquiry').slice(0, 150);
  const cleanMessage = sanitizeText(message).slice(0, 2000);

  if (!cleanName || cleanName.length < 2) {
    throw new Error('Please enter a valid name (at least 2 characters).');
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(cleanEmail)) {
    throw new Error('Please enter a valid email address.');
  }

  if (!cleanMessage || cleanMessage.length < 5) {
    throw new Error('Please enter a message of at least 5 characters.');
  }

  // 3. Verify Firebase configuration
  if (!isFirebaseConfigured) {
    throw new Error(
      'Database connection is not configured yet. Please configure your Firebase credentials.'
    );
  }

  const db = await getDb();
  if (!db) {
    throw new Error('Failed to connect to database. Please check your network connection.');
  }

  try {
    const { collection, addDoc, serverTimestamp } = await import('firebase/firestore');
    const contactsCollection = collection(db, 'contacts');
    const docRef = await addDoc(contactsCollection, {
      name: cleanName,
      email: cleanEmail,
      subject: cleanSubject,
      message: cleanMessage,
      status: 'unread',
      createdAt: serverTimestamp(),
      submittedAtClient: new Date().toISOString(),
    });

    // Record submission timestamp for throttle
    sessionStorage.setItem('last_contact_submission', Date.now().toString());

    return {
      success: true,
      id: docRef.id,
    };
  } catch (error) {
    console.error('Error saving contact message to Firestore:', error);

    if (error.code === 'permission-denied') {
      throw new Error(
        'Database write permission denied. Please verify your Firestore security rules allow submissions.'
      );
    } else if (error.code === 'unavailable') {
      throw new Error('Network issue: unable to reach database. Please check your internet connection.');
    }

    throw new Error(error.message || 'Failed to send message. Please try again.');
  }
}
