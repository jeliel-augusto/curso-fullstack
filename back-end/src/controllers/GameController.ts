import { Request, Response } from "express";
import { GameService } from "../services/GameService";

export class GameController {
  static getGames(request: Request, response: Response) {
    const listOfGames = GameService.getGames();
    response.status(201).json(listOfGames);
  }
  static updateGame(request: Request, response: Response) {
    const id = request.params.id;
    const gameUpdated = GameService.updateGameById(+id, request.body);
    response.status(200).json(gameUpdated);
  }
}
