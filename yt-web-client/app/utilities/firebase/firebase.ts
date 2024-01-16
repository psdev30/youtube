// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth, 
    signInWithPopup, 
    GoogleAuthProvider,
    onAuthStateChanged,
    User,
    Auth
} from 'firebase/auth'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBaTuckgr2dtLk0Ug084DQf7sHAO0hKzkU',
  authDomain: 'clone-ffa0f.firebaseapp.com',
  projectId: 'clone-ffa0f',
  appId: '1:754071775736:web:a44587aa9e3973b3028e0d',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth: Auth = getAuth(app)

/**
 * Signs the user in with a Google popup.
 * @returns A promise that resolves with the user's credentials.
 */
export function signInWithGoogle() {
  return signInWithPopup(auth, new GoogleAuthProvider());
}

/**
 * Signs the user out.
 * @returns A promise that resolves when the user is signed out.
 */
export function signOut() {
  return auth.signOut();
}

/**
 * Trigger a callback when user auth state changes.
 * @returns A function to unsubscribe callback.
 */
export function onAuthStateChangedHelper(callback: (user: User | null) => void) {
  return onAuthStateChanged(auth, callback);
}
