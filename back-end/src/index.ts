import express from "express";
import { GameRoutes } from "./routes/GameRoutes";
const app = express();
app.use(GameRoutes);

app.listen(3000, () => {
  // server started
  console.log("server started ok");
});
