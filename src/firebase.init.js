// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCiqgoSNCr9YYfwwNkJ5U_VPquOB0lkako",
    authDomain: "accounted-web-layout.firebaseapp.com",
    projectId: "accounted-web-layout",
    storageBucket: "accounted-web-layout.appspot.com",
    messagingSenderId: "61778239693",
    appId: "1:61778239693:web:403a38e8b9b208f6ff8984"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth