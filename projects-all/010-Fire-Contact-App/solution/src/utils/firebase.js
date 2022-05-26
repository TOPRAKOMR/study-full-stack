// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBPMw0EetCbc_gDX9KMXUCMuN1Qk6ypNUw",
  authDomain: "reactjs-train.firebaseapp.com",
  databaseURL: "https://reactjs-train-default-rtdb.firebaseio.com",
  projectId: "reactjs-train",
  storageBucket: "reactjs-train.appspot.com",
  messagingSenderId: "515003567847",
  appId: "1:515003567847:web:868729412778a2f273dc42",
  measurementId: "G-SR0WDHZ47D"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export default firebase;