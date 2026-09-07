import { db, isFirebaseConfigured } from '../lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

/**
 * Saves a contact form message to Firebase Cloud Firestore.
 * @param {Object} messageData
 * @param {string} messageData.name
 * @param {string} messageData.email
 * @param {string} messageData.subject
 * @param {string} messageData.message
 * @returns {Promise<{success: boolean, id: string}>}
 */
export async function saveContactMessage({ name, email, subject, message }) {
  // Validate input fields
  const cleanName = (name || '').trim();
  const cleanEmail = (email || '').trim();
  const cleanSubject = (subject || '').trim();
  const cleanMessage = (message || '').trim();

  if (!cleanName || !cleanEmail || !cleanMessage) {
    throw new Error('Please fill in all required fields (Name, Email, and Message).');
  }

  // Basic email pattern check
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(cleanEmail)) {
    throw new Error('Please enter a valid email address.');
  }

  // Verify Firebase configuration
  if (!isFirebaseConfigured || !db) {
    throw new Error(
      'Database connection is not configured yet. Please add your Firebase configuration in .env.local to save messages.'
    );
  }

  try {
    const contactsCollection = collection(db, 'contacts');
    const docRef = await addDoc(contactsCollection, {
      name: cleanName,
      email: cleanEmail,
      subject: cleanSubject || 'General Inquiry',
      message: cleanMessage,
      status: 'unread',
      createdAt: serverTimestamp(),
      submittedAtClient: new Date().toISOString(),
    });

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
