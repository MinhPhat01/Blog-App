import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyADf0A7qKOsUhh1Exizya6VxXPSfAZ4jR8",
  authDomain: "monkey-blogging-5ddb6.firebaseapp.com",
  projectId: "monkey-blogging-5ddb6",
  storageBucket: "monkey-blogging-5ddb6.appspot.com",
  messagingSenderId: "835782521779",
  appId: "1:835782521779:web:3b4f9d75f5416da93d91c6",
};
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
