import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics, isSupported } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCVMGZANLLrQSPH7-lhRz2Q6O8lyEhIbYU",
  authDomain: "minimar-71d7e.firebaseapp.com",
  projectId: "minimar-71d7e",
  storageBucket: "minimar-71d7e.appspot.com",
  messagingSenderId: "109197040704",
  appId: "1:109197040704:web:6d409757a687f6c9a393a5",
  measurementId: "G-152G2WPX6X"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

let analytics = null;

if (typeof window !== 'undefined') {
  isSupported().then((supported) => {
    if (supported) {
      analytics = getAnalytics(app);
    }
  });
}

export { app, db, analytics };
