// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDX0lHnSEjucsLKk3vX_q-HvyDm1BUBUMY",
  authDomain: "coffee-store-356b1.firebaseapp.com",
  projectId: "coffee-store-356b1",
  storageBucket: "coffee-store-356b1.appspot.com",
  messagingSenderId: "387055762306",
  appId: "1:387055762306:web:018e9f9466613840d96d9b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;