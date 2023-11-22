// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCvuEPvbpa9UMcFd4ugcpLjovWQi0oSLis",
  authDomain: "react--team-project.firebaseapp.com",
  projectId: "react--team-project",
  storageBucket: "react--team-project.appspot.com",
  messagingSenderId: "449960898860",
  appId: "1:449960898860:web:703e1416c2b78e4348fc89",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);