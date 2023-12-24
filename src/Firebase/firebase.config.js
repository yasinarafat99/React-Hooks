// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAE9q32VrIZsfDnzfx_VqNKymBoLCG03UY",
  authDomain: "exam-auth-31b2a.firebaseapp.com",
  projectId: "exam-auth-31b2a",
  storageBucket: "exam-auth-31b2a.appspot.com",
  messagingSenderId: "466375138376",
  appId: "1:466375138376:web:17dea34b0bc9fa98928c7d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;