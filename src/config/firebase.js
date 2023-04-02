import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyBD-zrw3jRu0FfZZeK0R0xehlqor0wi6Ag",
  authDomain: "tiktok---jornada-5cf97.firebaseapp.com",
  projectId: "tiktok---jornada-5cf97",
  storageBucket: "tiktok---jornada-5cf97.appspot.com",
  messagingSenderId: "831266384159",
  appId: "1:831266384159:web:0a26cb088f99933177a82a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
