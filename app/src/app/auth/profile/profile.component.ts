import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { GameService } from 'src/app/game/game.service';
import { IGame } from 'src/app/shared/interfaces';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  gameData: IGame | null = null;
  gameList !: IGame[];
  userId: string | undefined;
  isEmpty !: boolean;

  constructor(
    private apiService: ApiService,
    private authService: AuthService,
    private gameService: GameService,
    private router: Router) { }

  deleteGame(gameId: string) {
    this.gameService.deleteGame(gameId).subscribe({
      next: () => {
        this.router.navigate(['/auth/profile'])
      },
      error: (err) => { console.error(err) }
    })
  }

  ngOnInit(): void {
    this.apiService.loadGames().subscribe({
      next: (value) => {
        this.gameList = value
        this.userId = this.authService.user?._id.toString()
        this.gameList = this.gameList.filter(x => x._ownerId._id.toString() == this.userId)

        if (this.gameList.length <= 0) {
          this.isEmpty = true;
        }
        else {
          this.isEmpty = false;
        }
      },
      error: (err) => { console.error(err) }
    })
  }
}