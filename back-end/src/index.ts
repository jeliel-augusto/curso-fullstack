import express from "express";
import { GameRoutes } from "./routes/GameRoutes";
import { PublisherRoutes } from "./routes/PublisherRoutes";
const app = express();
app.use(express.json());
app.use(GameRoutes);
app.use(PublisherRoutes);
app.listen(3000, () => {
  // server started
  console.log("server started ok");
});
