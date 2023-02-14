import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyChqVH8LMCrH6kLZ5BLvl3cdorHYEW03X0",
  authDomain: "chat-gpt-643ed.firebaseapp.com",
  projectId: "chat-gpt-643ed",
  storageBucket: "chat-gpt-643ed.appspot.com",
  messagingSenderId: "496477996603",
  appId: "1:496477996603:web:47fcdc7219877afb8f7e1e",
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };
