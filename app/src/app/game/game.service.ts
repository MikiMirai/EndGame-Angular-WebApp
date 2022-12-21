import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IGame } from '../shared/interfaces';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(private http: HttpClient) { }

  getGames(maxCount?: number) {
    let url = '/api/games';
    if (maxCount) {
      url += '?limit=5';
    }
    return this.http.get<IGame[]>(url);
  }

  getGame(id: string) {
    return this.http.get<IGame>('/api/games/' + id);
  }

  //title, imageUrl, description, genres, price, rating

  createGame(title: string, imageUrl: string, description: string, genres: string, price: string, rating: string) {
    return this.http.post<IGame>('/api/games/', {title, imageUrl, description, genres, price, rating });
  }
}
