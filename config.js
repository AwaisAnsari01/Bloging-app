import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js"


const firebaseConfig = {
  apiKey: "AIzaSyAFuvBaab5ZcrO0okwChQwMS5VNVXfmsRY",
  authDomain: "e-commerce-a19d7.firebaseapp.com",
  projectId: "e-commerce-a19d7",
  storageBucket: "e-commerce-a19d7.appspot.com",
  messagingSenderId: "923356608801",
  appId: "1:923356608801:web:0b75a3b6bb641aab846660",
  measurementId: "G-JL1DQLSY2V"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
  