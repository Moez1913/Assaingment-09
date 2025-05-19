// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCR32s7LlHwb_HU5jI4K17f8pok9Uz4bb4",
  authDomain: "gadget-heaven-a13f1.firebaseapp.com",
  projectId: "gadget-heaven-a13f1",
  storageBucket: "gadget-heaven-a13f1.firebasestorage.app",
  messagingSenderId: "304105219090",
  appId: "1:304105219090:web:045ecb66007af351a4a4cb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);