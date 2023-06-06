import { Request, Response } from "express";
import { CompraService } from "../services/CompraService";

export class CompraController {
  static async list(request: Request, response: Response) {
    try {
      const idClient = request.params.id;
      const list = await CompraService.getComprasByClient(+idClient);
      response.status(200).json(list);
    } catch (e: any) {
      response.status(500).json({ message: e.message });
    }
  }
  static async buyGames(request: Request, response: Response) {
    try {
      const idClient = request.params.id;
      const itensCompra = request.body;
      const result = await CompraService.buyGame(+idClient, itensCompra);
      response.status(200).json(result);
    } catch (e: any) {
      response.status(500).json({ message: e.message });
    }
  }
}
