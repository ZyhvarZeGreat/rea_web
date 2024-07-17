import { initializeApp } from "firebase/app";

export const firebaseConfig = {
  apiKey: "AIzaSyAmTn5VpzXhNsRXOJP_8GahKFRv7j43IjE",
  authDomain: "rea-test-6b58e.firebaseapp.com",
  projectId: "rea-test-6b58e",
  storageBucket: "rea-test-6b58e.appspot.com",
  messagingSenderId: "285326343426",
  appId: "1:285326343426:web:5c2fa94b0a9ae04f56d61b",
  measurementId: "G-V6XVQTYLYJ",
};

const firebaseApp = initializeApp(firebaseConfig);
export default firebaseApp;
