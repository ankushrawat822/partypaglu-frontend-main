import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage"; 
// console.log((import.meta.env.VITE_REACT_FIREBASE))

const firebaseConfig = {
    apiKey: (import.meta.env.VITE_REACT_FIREBASE_API_KEY),
    authDomain: (import.meta.env.VITE_REACT_FIREBASE_AUTH_DOMAIN),
    projectId: (import.meta.env.VITE_REACT_FIREBASE_PROJECT_ID),
    storageBucket: (import.meta.env.VITE_REACT_FIREBASE_STORAGE_BUCKET),
    messagingSenderId: (import.meta.env.VITE_REACT_FIREBASE_MESSAGING_SENDER_ID),
    appId: (import.meta.env.VITE_REACT_FIREBASE_APP_ID),
    measurementId: (import.meta.env.VITE_REACT_FIREBASE_MEASUREMENT_ID),
    
  };


  export const app = initializeApp(firebaseConfig);
  export const storage = getStorage(app);



  //databaseURL : (import.meta.env.VITE_REACT_FIREBASE_DATABASE_URL)