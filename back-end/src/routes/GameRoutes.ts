import { Router } from "express";
import { GameController } from "../controllers/GameController";

export const GameRoutes = Router();

GameRoutes.get("/games", GameController.getGames);
