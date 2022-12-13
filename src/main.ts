import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { environment } from './environments/environment';

import { AppModule } from './app/app.module';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref, set, update, onValue, DatabaseReference, get, child } from "firebase/database";
import { Game } from './app/shared/services/game';
import { DataSnapshot } from '@angular/fire/compat/database/interfaces';
import * as firebase from 'firebase/compat';

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

function writeGameData(gameId: string, name: string, picture: string, description: string, genres: string, rating: string) {
  const db = getDatabase();
  const reference = ref(db, 'games/' + gameId);

  set(reference,
    {
      name: name,
      picture: picture,
      description: description,
      genres: genres,
      rating: rating
    });

}

//writeGameData("firstGame","God of War", "https://cdn.cloudflare.steamstatic.com/steam/apps/1593500/capsule_616x353.jpg?t=1650554420", "Great Game(description)", "Open world, Adventure", "10")
// writeUserData("MikuId", "Miki", "Miki2000@gmail.com", "password123")

function readUser(userId: string) {
  const db = getDatabase();
  const reference = ref(db, 'users/' + userId);
  onValue(reference, (snapshot) => {
    return snapshot.val();
  });
}

//console.log(readUser("MikuId"));
let gameData = new Game;

function updateVal(name: string, val: string){
  if (Object.hasOwn(gameData, name)) {
    Object.defineProperty(gameData, name, val)
  }
}

function ReadGameData(gameId: string) {
  const db = getDatabase();
  const gameRef = ref(db, 'games/' + gameId);
  onValue(gameRef, (snapshot) => {
    const data = snapshot.val();
    updateVal('name', `${data.name}`)
    // gameData.name = data.name;
    // gameData.picture = data.picture;
    // gameData.description = data.description;
    // gameData.genres = data.genres;
    // gameData.rating = data.rating;
  });
};

ReadGameData("firstGame");

let gameName = gameData.name;

console.log(gameName);