import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDvVkb8G9D9GHzKgUMwgFCiUAicOGFkWB0",
  authDomain: "simple-firebase-ad039.firebaseapp.com",
  projectId: "simple-firebase-ad039",
  storageBucket: "simple-firebase-ad039.appspot.com",
  messagingSenderId: "623595366084",
  appId: "1:623595366084:web:82e91c8b9b2ef6dd3b4b91"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;