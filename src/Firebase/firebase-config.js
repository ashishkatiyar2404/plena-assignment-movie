import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyALdcdNpXEG1BfqiU40gyJV1HrVunCcpu4",
  authDomain: "movie-stream-dc3f2.firebaseapp.com",
  projectId: "movie-stream-dc3f2",
  storageBucket: "movie-stream-dc3f2.appspot.com",
  messagingSenderId: "182041970005",
  appId: "1:182041970005:web:009a96cde9811d02ee5bdc",
  measurementId: "G-VCCN3ZE0CR",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
