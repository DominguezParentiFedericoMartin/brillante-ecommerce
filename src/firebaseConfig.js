// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDyRBQd39qC-2T0BjwmxHClyjukmxE7fgE",
  authDomain: "brillate-dominguez-parenti.firebaseapp.com",
  projectId: "brillate-dominguez-parenti",
  storageBucket: "brillate-dominguez-parenti.appspot.com",
  messagingSenderId: "834902497524",
  appId: "1:834902497524:web:4a1d76d03c7d3cfd6826a1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
