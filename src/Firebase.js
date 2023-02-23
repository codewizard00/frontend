// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCSheN49iqquzJWenkcGF87Faj10ZGykxc",
  authDomain: "premsudha-684a3.firebaseapp.com",
  projectId: "premsudha-684a3",
  storageBucket: "premsudha-684a3.appspot.com",
  messagingSenderId: "694520155771",
  appId: "1:694520155771:web:b34637d8700ce6ce389cde",
  measurementId: "G-9FMYHDKK10"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app)