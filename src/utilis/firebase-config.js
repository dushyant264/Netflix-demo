import {getAuth} from "firebase/auth";
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyDC03rRBn9YKEbLbD7MJsqr3BbIEnbyMzs",
  authDomain: "netflix-clon-9629d.firebaseapp.com",
  projectId: "netflix-clon-9629d",
  storageBucket: "netflix-clon-9629d.appspot.com",
  messagingSenderId: "885095214276",
  appId: "1:885095214276:web:7e40f97f3cb4bf0efeed91",
  measurementId: "G-P1Q2E7E2DW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
