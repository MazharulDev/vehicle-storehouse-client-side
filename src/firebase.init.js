// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDHSHC5ksfdK3DByA_0mXQFGbX0QJ5OUf4",
  authDomain: "vehicle-storehouse.firebaseapp.com",
  projectId: "vehicle-storehouse",
  storageBucket: "vehicle-storehouse.appspot.com",
  messagingSenderId: "661625883922",
  appId: "1:661625883922:web:a8477842848b7c79bab7cb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
export default auth;