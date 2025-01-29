if (document.getElementById('my-work-link')) {
  document.getElementById('my-work-link').addEventListener('click', () => {
    document.getElementById('my-work-section').scrollIntoView({behavior: "smooth"})
  })
}

import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
import { getFirestore, doc, getDoc, setDoc, updateDoc } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyD7BL6UGwmsYDpOMb1orMxLGIxLsHi8iTU",
  authDomain: "evelyns-website.firebaseapp.com",
  projectId: "evelyns-website",
  storageBucket: "evelyns-website.firebasestorage.app",
  messagingSenderId: "436629502752",
  appId: "1:436629502752:web:da3e40a4c5e86971693545",
  measurementId: "G-1ZJBXNBW4Z"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

console.log("Firebase Initialized:", app); // Confirm if Firebase is initialized


