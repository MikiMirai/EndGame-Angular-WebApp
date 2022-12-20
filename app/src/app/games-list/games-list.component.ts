import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

import { Game } from '../shared/services/game';
import { GameService } from '../shared/services/game.service';

@Component({
  selector: 'app-games-list',
  templateUrl: './games-list.component.html',
  styleUrls: ['./games-list.component.scss']
})
export class GamesListComponent implements OnInit {
  gamesList?: Game[] | null = null;
  currentGame?: Game;
  title = '';
  users!: any[];
  errorFetcingData = false;

  constructor(private gameService: GameService, private apiService: ApiService) { }

  ngOnInit(): void {
    //this.retriveGames();
    this.gameService.getUsers().subscribe(users => {
      this.users = users;
    })

    this.apiService.loadGames().subscribe({
      next: (value) => {
        this.gamesList = value;
      },
      error: (err) => {
        this.errorFetcingData = true;
        console.error(err);
      }
    });
  }

  // retriveGames(): void {
  //   this.gameService.getAllGames().snapshotChanges().pipe(
  //     map(changes =>
  //       changes.map(c =>
  //         ({ key: c.payload.key, ...c.payload.val() })
  //       )
  //     )
  //   ).subscribe(data => {
  //     this.games = data;
  //   });
  // }

}
