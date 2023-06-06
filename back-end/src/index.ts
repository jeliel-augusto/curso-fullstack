import express from "express";
import { GameRoutes } from "./routes/GameRoutes";
import { PublisherRoutes } from "./routes/PublisherRoutes";
import { ClientRoutes } from "./routes/ClientRoutes";
import { CompraRoutes } from "./routes/CompraRoutes";
const app = express();
app.use(express.json());
app.use(GameRoutes);
app.use(PublisherRoutes);
app.use(CompraRoutes);
app.use(ClientRoutes);

app.listen(3000, () => {
  // server started
  console.log("server started ok");
});
