import express from "express";
import { GameRoutes } from "./routes/GameRoutes";
import { PublisherRoutes } from "./routes/PublisherRoutes";
import { ClientRoutes } from "./routes/ClientRoutes";
import { CompraRoutes } from "./routes/CompraRoutes";
import cors from "cors";
import cookieParser from "cookie-parser";
import { AuthRoutes } from "./routes/AuthRoutes";
const app = express();
app.use(cookieParser());
app.use(cors());
app.use(express.json());
app.use(AuthRoutes);
app.use(GameRoutes);
app.use(PublisherRoutes);
app.use(CompraRoutes);
app.use(ClientRoutes);

app.listen(3333, () => {
  // server started
  console.log("server started ok");
});
