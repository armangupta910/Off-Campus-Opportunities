
// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBq__QhwGzjCQ5BE99S59vxsk5fjIfJnX0",
    authDomain: "job-openings-off-campus.firebaseapp.com",
    projectId: "job-openings-off-campus",
    storageBucket: "job-openings-off-campus.appspot.com",
    messagingSenderId: "321941401584",
    appId: "1:321941401584:web:ff3dbcf96a357ec2e33735",
    measurementId: "G-S042FLM46C"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

export { db };

