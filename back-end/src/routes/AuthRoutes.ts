import { Router } from "express";
import { AuthController } from "../controllers/AuthController";

export const AuthRoutes = Router();

AuthRoutes.post("/auth/login", AuthController.login);
AuthRoutes.post("/auth/sign-up", AuthController.save);
