// Import the functions you need from the SDKs you need
import { getAuth} from "firebase/auth";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBzo0Q19Be40TllOUOhHubG-nAuudPKX0U",
  authDomain: "dreamdwellings-fd041.firebaseapp.com",
  projectId: "dreamdwellings-fd041",
  storageBucket: "dreamdwellings-fd041.appspot.com",
  messagingSenderId: "199540789725",
  appId: "1:199540789725:web:e692d7957aaf37ec86a634"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;