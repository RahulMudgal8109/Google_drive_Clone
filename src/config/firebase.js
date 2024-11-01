import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBvHefwJ8zx2oYr0SBNCtsMuU0yzZi2JGw",
    authDomain: "g-drive-ee763.firebaseapp.com",
    projectId: "g-drive-ee763",
    storageBucket: "g-drive-ee763.appspot.com",
    messagingSenderId: "812806374611",
    appId: "1:812806374611:web:f89d5a6a3c8ceeed908026"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { db, storage, auth, googleProvider };
