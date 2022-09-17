

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCS4MpWbuIL7txY302hUqJG1wG46hexUy0",
  authDomain: "react-3a19c.firebaseapp.com",
  projectId: "react-3a19c",
  storageBucket: "react-3a19c.appspot.com",
  messagingSenderId: "124544329756",
  appId: "1:124544329756:web:2a6cd95ff7519234b857d9",
  measurementId: "G-YHZGG6V0KT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export default app
