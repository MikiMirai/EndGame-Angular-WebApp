import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref, set } from "firebase/database";

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCljOLKaWhXIVNje79uHylNV7607jtTgXg",
  authDomain: "endgame-51294.firebaseapp.com",
  databaseURL: "https://endgame-51294-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "endgame-51294",
  storageBucket: "endgame-51294.appspot.com",
  messagingSenderId: "111538745375",
  appId: "1:111538745375:web:79356170937be0414ea52a",
  measurementId: "G-8D5F3FLR8S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function writeUserData(userId: string, name: string, email: string, password: string)
{
  const db = getDatabase();
  const reference = ref(db, 'users/' + userId);

  set(reference, 
    {
      username: name,
      email: email,
      password: password
    });
}

writeUserData("MikuId", "Miki", "Miki2000@gmail.com", "123456789")