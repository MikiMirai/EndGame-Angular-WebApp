import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameListComponent } from './game-list/game-list.component';
import { GameRoutingModule } from './game-routing.module';
import { SharedModule } from '../shared/shared.module';
import { NewGameComponent } from './new-game/new-game.component';
import { GameDetailComponent } from './game-detail/game-detail.component';

import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    GameListComponent,
    NewGameComponent,
    GameDetailComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    GameRoutingModule
  ],
  exports: [
    GameListComponent
  ]
})
export class GameModule { }
