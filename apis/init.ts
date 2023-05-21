import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCf1D7NfX8S5Bztgq3Xhp5KMJ_uNICQSY0",
  authDomain: "ecommerce-clone-7f081.firebaseapp.com",
  projectId: "ecommerce-clone-7f081",
  storageBucket: "ecommerce-clone-7f081.appspot.com",
  messagingSenderId: "112313520240",
  appId: "1:112313520240:web:8d4a38a4bf8928e35ce4b5"
};

export const app = initializeApp(firebaseConfig);

export default function init() {
  return app;
}