// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.2/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  onSnapshot,
} from "https://www.gstatic.com/firebasejs/9.6.2/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBo8gpky7DMtJrDiGsnNcRa7DtR0GZxW2Q",
  authDomain: "crudtasks-5f6d2.firebaseapp.com",
  projectId: "crudtasks-5f6d2",
  storageBucket: "crudtasks-5f6d2.appspot.com",
  messagingSenderId: "528956841199",
  appId: "1:528956841199:web:216dc82ce2b2899e568f1a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore();

export const saveTask = (title, description) => {
  addDoc(collection(db, "tasks"), { title, description });
};

export const getTasks = () => getDocs(collection(db, "tasks"));

export const onGetTasks = () => console.log("onGetTasks");

export { onSnapshot, collection, db };
