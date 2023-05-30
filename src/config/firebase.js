import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyBOdjNfxHTn32Pr98B1NQg_tc7ib1BuueA",
  authDomain: "slashkey-836ce.firebaseapp.com",
  projectId: "slashkey-836ce",
  storageBucket: "slashkey-836ce.appspot.com",
  messagingSenderId: "72405452783",
  appId: "1:72405452783:web:5d9dc061a102824ba3981a",
  measurementId: "G-SKHLC2XW1B"
};



const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export  const auth = getAuth(app);
export const GoogleProvider = new GoogleAuthProvider();

export const db = getFirestore(app); 