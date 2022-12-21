import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from '../environments/environment';
import { IGame } from './shared/interfaces/game';

const apiURL = environment.apiURL;

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  getGames() {
    let url = '/api/games/';
    url += '?limit=3';
    return this.httpClient.get<IGame[]>(url);
  }

  loadGames() {
    return this.httpClient.get<IGame[]>(`${apiURL}/games`);
  }

  loadGame(id: number) {
    return this.httpClient.get<IGame>(`${apiURL}/games/${id}`);
  }
}