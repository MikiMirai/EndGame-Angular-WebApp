import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { GameService } from '../game.service';

@Component({
  selector: 'app-new-game',
  templateUrl: './new-game.component.html',
  styleUrls: ['./new-game.component.scss']
})
export class NewGameComponent {

  constructor(
    private gameService: GameService,
    private router: Router
  ) { }

  newGameHandler(form: NgForm): void {
    if (form.invalid) { return; }
    const { title, imageUrl, description, genres, price, rating } = form.value;

    this.gameService.createGame(title, imageUrl, description, genres, price, rating)
      .subscribe(() => {
        this.router.navigate(['/'])
      })
  }
}
