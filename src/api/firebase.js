import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCbypZWdyF3MQ_P36JsAPkCHeONnKTek8M",
  authDomain: "gbchat-681b0.firebaseapp.com",
  databaseURL:
    "https://gbchat-681b0-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "gbchat-681b0",
  storageBucket: "gbchat-681b0.appspot.com",
  messagingSenderId: "667196852241",
  appId: "1:667196852241:web:7a4982e4adcf9672db49b0",
};

export const firebase = initializeApp(firebaseConfig);
export const auth = getAuth(firebase);
export const database = getDatabase(firebase);
