import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IGame } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.scss']
})
export class GameDetailComponent implements OnInit {

  game: IGame;

  constructor(private activatedRoute: ActivatedRoute) {
    this.game = this.activatedRoute.snapshot.data?.['game'];
    console.log(this.activatedRoute.snapshot.data?.['game']);

  }

  ngOnInit(): void {

  }

}
