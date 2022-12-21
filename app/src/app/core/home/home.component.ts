import { Component } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { IGame } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  gameListRecent: IGame[] | null = null;
  gameListTrending: IGame[] | null = null;

  errorFetcingData = false;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getGamesRecent().subscribe({
      next: (value) => {
        this.gameListRecent = value.reverse().slice(0, 3);
      },
      error: (err) => {
        this.errorFetcingData = true;
        console.error(err);
      }
    });

    this.apiService.getGamesRecent().subscribe({
      next: (value) => {
        this.gameListTrending = value.sort((a, b) => +b.rating - +a.rating).slice(0, 3);
      },
      error: (err) => {
        this.errorFetcingData = true;
        console.error(err);
      }
    });
  }
}
