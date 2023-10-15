import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB9AMmpsNgx5rdOYMzVf6cfzfdRMng9obo",
  authDomain: "valoinfo-3da49.firebaseapp.com",
  projectId: "valoinfo-3da49",
  storageBucket: "valoinfo-3da49.appspot.com",
  messagingSenderId: "784826802009",
  appId: "1:784826802009:web:df4e6cd536d67786493648",
};

const app = initializeApp(firebaseConfig); //it connects firebase with our project
export const auth = getAuth(app); //format : getTypeOfService(app)
export const db = getFirestore(app);
export const gooogleProvider = new GoogleAuthProvider();

export default app;