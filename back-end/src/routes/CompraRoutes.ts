import { Router } from "express";
import { CompraController } from "../controllers/CompraController";

export const CompraRoutes = Router();
CompraRoutes.get("/client/:id/purchases", CompraController.list);
CompraRoutes.post("/client/:id/buy", CompraController.buyGames);
CompraRoutes.put(
  "/client/purchases/:idCompra",
  CompraController.updateBuyGames
);
CompraRoutes.delete("/client/purchases/:id", CompraController.deleteCompra);
CompraRoutes.get("/client/purchases/:id", CompraController.getById);
