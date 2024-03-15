// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBL8Tf8zLZJiQmZ5EO0jMo1I5xLDfO6hEU",
  authDomain: "cources-b3b68.firebaseapp.com",
  projectId: "cources-b3b68",
  storageBucket: "cources-b3b68.appspot.com",
  messagingSenderId: "632261369401",
  appId: "1:632261369401:web:3ba49e98d3071988dff7e8"
};

// Initialize Firebase



const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
const analytics = getAnalytics(app);
export default auth ;