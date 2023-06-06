import { Router } from "express";
import { CompraController } from "../controllers/CompraController";

export const CompraRoutes = Router();
CompraRoutes.get("/client/:id/purchases", CompraController.list);
CompraRoutes.post("/client/:id/buy", CompraController.buyGames);
