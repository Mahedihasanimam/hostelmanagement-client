// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDXCPleaRBSoPR4RBThuk8EDCoCQVzQiD0",
  authDomain: "hostelmanagement-d2b48.firebaseapp.com",
  projectId: "hostelmanagement-d2b48",
  storageBucket: "hostelmanagement-d2b48.appspot.com",
  messagingSenderId: "873107760730",
  appId: "1:873107760730:web:b39f009458da03cf811a63"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
export default auth;