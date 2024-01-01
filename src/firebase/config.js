// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import { getDatabase } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth"

import firebase_credentail from "./credentail";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: firebase_credentail.FIREBASE_API_KEY,
  authDomain:firebase_credentail.FIREBASE_AUTH_DOMAIN,
  projectId:firebase_credentail.FIREBASE_PROJECT_ID,
  storageBucket:firebase_credentail.FIREBASE_STORAGE_BUCKET,
  messagingSenderId:firebase_credentail.FIREBASE_MESSAGING_SENDER_ID ,
  appId:firebase_credentail.FIREBASE_APP_ID, 
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export {auth,db};