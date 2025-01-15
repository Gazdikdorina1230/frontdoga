import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

export const environment = {
    production: false,
    firebaseConfig: {
        apiKey: "AIzaSyCwpUgooaWpVU4MWCHCU93_vRycwNNnYAU",
        authDomain: "dolgozat-560cb.firebaseapp.com",
        databaseURL: "https://dolgozat-560cb-default-rtdb.europe-west1.firebasedatabase.app",
        projectId: "dolgozat-560cb",
        storageBucket: "dolgozat-560cb.firebasestorage.app",
        messagingSenderId: "393301958058",
        appId: "1:393301958058:web:0564aaf8b8f5daeaeadfd3",
    }
  };
const app = initializeApp(environment.firebaseConfig);
const analytics = getAnalytics(app);

  