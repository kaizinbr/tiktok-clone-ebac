// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
    apiKey: "AIzaSyDbIbX3LYtJIYiefCS-jVzsfDhxSkwPx-4",
    authDomain: "tiktok-cloud-701ed.firebaseapp.com",
    projectId: "tiktok-cloud-701ed",
    storageBucket: "tiktok-cloud-701ed.appspot.com",
    messagingSenderId: "170269499607",
    appId: "1:170269499607:web:46d400327d1bfeaa9bd092",
    measurementId: "G-RZZRC50J7F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db = getFirestore(app);

export default db;