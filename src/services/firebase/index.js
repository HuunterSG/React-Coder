import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBjkrxZEI4HcPbzEqhaWhSKVgjEY_haj-I",
  authDomain: "reactapp-gamingland.firebaseapp.com",
  projectId: "reactapp-gamingland",
  storageBucket: "reactapp-gamingland.appspot.com",
  messagingSenderId: "319887484361",
  appId: "1:319887484361:web:1978c620c0e06ec393f418"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firestoreDb = getFirestore(app)
