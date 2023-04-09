import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDTm8kqEU3TX8Ult-_ea1_tqVaBbDsnRPU",
  authDomain: "the-ninja-dojo.firebaseapp.com",
  projectId: "the-ninja-dojo",
  storageBucket: "the-ninja-dojo.appspot.com",
  messagingSenderId: "92058752933",
  appId: "1:92058752933:web:ca0d8dfe7be9be08d97a4c",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
