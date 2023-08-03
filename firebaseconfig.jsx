import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "@firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyAFAvygCPmXFl06WLQ3NkD9dcTwdc4tUn0",
  authDomain: "chatx-6a1a9.firebaseapp.com",
  projectId: "chatx-6a1a9",
  storageBucket: "chatx-6a1a9.appspot.com",
  messagingSenderId: "24966824273",
  appId: "1:24966824273:web:2a4b1d804b080828d9d370",
  measurementId: "G-FC785VBBYF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();