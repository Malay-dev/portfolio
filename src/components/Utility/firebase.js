import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";
const firebaseConfig = {
  apiKey: "AIzaSyCOxFiPOl3Cd_zuyZg3ufpoLvY086_Ikvs",
  authDomain: "contact-portfolio-d7c90.firebaseapp.com",
  projectId: "contact-portfolio-d7c90",
  storageBucket: "contact-portfolio-d7c90.appspot.com",
  messagingSenderId: "904808251859",
  appId: "1:904808251859:web:a9dced0feca1c4c7d0ef26",
  measurementId: "G-8WXQQCC838",
};
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

const firebaseConfig1 = {
  apiKey: "AIzaSyD2h00ky_wQuZsDl0X_Gl8josIXOBYjx_Y",
  authDomain: "real-time-viewcounter.firebaseapp.com",
  databaseURL:
    "https://real-time-viewcounter-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "real-time-viewcounter",
  storageBucket: "real-time-viewcounter.appspot.com",
  messagingSenderId: "1031371450918",
  appId: "1:1031371450918:web:1cc5a67b6ab3affc5254e7",
  measurementId: "G-RRX5WXBNTM",
};

// Initialize Firebase
const app1 = initializeApp(firebaseConfig1, "app");
const db_VC = getDatabase(app1);
export { db, db_VC };
