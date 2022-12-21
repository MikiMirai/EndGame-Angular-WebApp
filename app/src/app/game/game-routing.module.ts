import { RouterModule, Routes } from "@angular/router";
import { NewGameComponent } from "./new-game/new-game.component";
import { GameResolver } from "./resolvers/game.resolver";
import { GameDetailComponent } from "./game-detail/game-detail.component";
import { GameListComponent } from "./game-list/game-list.component";

const routes: Routes = [
 
  {
    path: 'new',
    component: NewGameComponent
  },
  {
    path: 'game-list',
    component: GameListComponent
  },
  {
    path: 'detail/:id',
    resolve: {
      game: GameResolver
    },
    component: GameDetailComponent
  }
];

export const GameRoutingModule = RouterModule.forChild(routes);
