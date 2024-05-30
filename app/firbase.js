// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import  {getAuth} from'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDaG_mmoWXqGoZJvkeeArMfTv_5DQ3hhLw",
  authDomain: "land-guide-943ee.firebaseapp.com",
  projectId: "land-guide-943ee",
  storageBucket: "land-guide-943ee.appspot.com",
  messagingSenderId: "28064910628",
  appId: "1:28064910628:web:3fbfe13b28b2579fb8b7b1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const auth = getAuth(app)


export default function(){(<>Nothing is here</>)}