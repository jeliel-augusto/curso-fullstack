import knex from "knex";
import { config } from "dotenv";
config();
export const knexConnection = knex({
  client: "pg",
  connection: {
    host: process.env.DB_HOST,
    port: +process.env.DB_PORT!,
    user: "root",
    password: process.env.DB_PASSWORD,
    database: "bd_games",
  },
});
