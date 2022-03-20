import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";
const firebaseConfig = {
  apiKey: "AIzaSyBkL3IK6-Et7GkzQoeaPQiRG4iSBN8Ump4",
  authDomain: "my-portfolio-2022-d53c0.firebaseapp.com",
  databaseURL:
    "https://my-portfolio-2022-d53c0-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "my-portfolio-2022-d53c0",
  storageBucket: "my-portfolio-2022-d53c0.appspot.com",
  messagingSenderId: "900012060692",
  appId: "1:900012060692:web:de9320bc05c7689ff77701",
  measurementId: "G-3CL722GFSN",
};
const app = initializeApp(firebaseConfig);
const dbf = getFirestore(app);
const dbr = getDatabase(app);
export { dbf, dbr };
