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

// Lazy Firebase initialization to keep initial bundle ultra-lean
let dbInstance = null;

export async function getDb() {
  if (!isFirebaseConfigured) return null;
  if (dbInstance) return dbInstance;
  try {
    const [{ initializeApp, getApps, getApp }, { getFirestore }] = await Promise.all([
      import('firebase/app'),
      import('firebase/firestore')
    ]);
    const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
    dbInstance = getFirestore(app);
    return dbInstance;
  } catch (error) {
    console.error('Failed to initialize Firebase:', error);
    return null;
  }
}

export { firebaseConfig };
