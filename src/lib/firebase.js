import { initializeApp, getApps, getApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || 'AIzaSyCCrYxW4tuxuymmz1JKVM49FrmQ2uvJnjw',
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || 'portfolio-d31f7.firebaseapp.com',
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || 'portfolio-d31f7',
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || 'portfolio-d31f7.firebasestorage.app',
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || '937513251866',
  appId: import.meta.env.VITE_FIREBASE_APP_ID || '1:937513251866:web:c251537a880694391e0da3',
};

// Check if credentials have been populated
export const isFirebaseConfigured = Boolean(
  firebaseConfig.apiKey &&
  firebaseConfig.projectId &&
  !firebaseConfig.apiKey.includes('YOUR_')
);

// Initialize Firebase safely
let dbInstance = null;

if (isFirebaseConfigured) {
  try {
    const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
    dbInstance = getFirestore(app);
  } catch (error) {
    console.error('Failed to initialize Firebase:', error);
  }
}

export const db = dbInstance;
export { firebaseConfig };
