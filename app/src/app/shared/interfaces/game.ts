import { IUser } from "./user";

//title, _ownerId, imageUrl, description, rating, genres, price

export interface IGame {
  _id: string;
  title: string;
  imageUrl: string;
  _ownerId: IUser;
  description: string;
  score: string;
  genres: string;
  price: string;
  created_on: string;
}
