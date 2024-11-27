// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {getAnalytics} from "firebase/analytics";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBy3AcgseYKO_f4ssI50swJkDX9agl_xxw",
  authDomain: "vedios-459c4.firebaseapp.com",
  projectId: "vedios-459c4",
  storageBucket: "vedios-459c4.appspot.com",
  messagingSenderId: "344752210170",
  appId: "1:344752210170:web:4cef21e89eda6148dc4943",
  measurementId: "G-4872CRZ8ZK",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const analytics = getAnalytics(app);

export {db};
