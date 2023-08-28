import { Request, Response } from "express";
import { AuthRepository } from "../repositories/AuthRepository";
import { AuthService } from "../services/AuthService";
import cookieParser from "cookie-parser";
export class AuthController {
  static async save(request: Request, response: Response) {
    try {
      const user = request.body;
      const clientSaved = await AuthService.createUser(user);
      return response.status(200).json(clientSaved);
    } catch (e: any) {
      if (e.message === "Email já existe") {
        return response.status(400).json({ message: e.message });
      }
      response.status(500).json({ message: e.message });
    }
  }
  static async login(request: Request, response: Response) {
    try {
      const { email, password } = request.body;
      const token = await AuthService.login(email, password);
      return response
        .cookie("token", token, {
          httpOnly: true,
        })
        .json({ message: "ok" });
    } catch (e: any) {
      response.status(401).json({ message: e.message });
    }
  }
}
