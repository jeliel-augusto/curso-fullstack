import knex from "knex";

export const knexConnection = knex({
  client: "mysql2",
  connection: {
    host: "127.0.0.1",
    port: 3306,
    user: "root",
    password: "root@2023",
    database: "bd_games",
  },
});
