import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { IGame } from '../../shared/interfaces';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.scss']
})
export class GameListComponent implements OnInit {

  gameList: IGame[] | null = null;
  errorFetcingData = false;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.loadGames().subscribe({
      next: (value) => {
        this.gameList = value;
      },
      error: (err) => {
        this.errorFetcingData = true;
        console.error(err);
      }
    });
  }

}
