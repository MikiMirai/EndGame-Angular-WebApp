import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';

import { getDatabase, ref, onValue } from "firebase/database";

import { Game } from './game';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(
    public afs: AngularFirestore,
    public router: Router
  ) {

  }

  GetAllGames() {

  }

  //Retrives undefined for some reason
  GetGameById(gameId: string) {
    const db = getDatabase();
    const reference = ref(db, 'games/' + gameId);
    var gameData = new Game;
    onValue(reference, (snapshot) => {
      const data = snapshot.val();
      gameData.name = data.name;
      gameData.picture = data.picture;
      gameData.description = data.description;
      gameData.genres = data.genres;
      gameData.rating = data.rating;
    });
    return gameData;
  }
}
