import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { environment } from './environments/environment';

import { AppModule } from './app/app.module';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref, set, update, onValue, DatabaseReference } from "firebase/database";

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Initialize Firebase
const app = initializeApp(environment.firebase);
const analytics = getAnalytics(app);

function writeUserData(userId: string, name: string, email: string, password: string) {
  const db = getDatabase();
  const reference = ref(db, 'users/' + userId);

  set(reference,
    {
      username: name,
      email: email,
      password: password
    });
}

// writeUserData("MikuId", "Miki", "Miki2000@gmail.com", "password123")

function readUser(userId: string) {
  const db = getDatabase();
  const reference = ref(db, 'users/' + userId);
  onValue(reference, (snapshot) => {
    return snapshot.val();
  });
}

console.log(readUser("MikuId"));