import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCoGIgqcv1JIeInezP49-D0Vhnd54k_n24",
  authDomain: "e-blah.firebaseapp.com",
  projectId: "e-blah",
  storageBucket: "e-blah.appspot.com",
  messagingSenderId: "104684165785",
  appId: "1:104684165785:web:cd42ff3217c5b892dc7608",
  measurementId: "G-DSD8CSKZ1M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth =getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
