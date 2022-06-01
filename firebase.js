// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA5rTIbm8qibhFAIJ-3v8Vel6EJ4YP2bs0",
  authDomain: "el-sufragio.firebaseapp.com",
  projectId: "el-sufragio",
  storageBucket: "el-sufragio.appspot.com",
  messagingSenderId: "393087810992",
  appId: "1:393087810992:web:8a8eda7a5b36f0e814ea75",
  measurementId: "G-VTC2XBK538"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);