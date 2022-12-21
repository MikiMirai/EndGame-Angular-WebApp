import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { ApiService } from "src/app/api.service";
import { IGame } from "../../shared/interfaces";

@Injectable({
  providedIn: 'root'
})
export class GameResolver implements Resolve<IGame | null> {
  constructor(private apiService: ApiService, private router: Router) { }
  
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): IGame | null | Observable<IGame> | Promise<IGame> {
    const gameId = route.params['id'];
    if (!gameId) {
      this.router.navigate(['/game/recent']);
      return null;
    }
    return this.apiService.loadGame(gameId);
  }


}