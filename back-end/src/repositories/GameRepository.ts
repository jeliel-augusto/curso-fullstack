import { knexConnection } from "../db/db";
import { Game } from "../entities/Game";

export class GameRepository {
  static async save(game: Game) {
    const resultInsert = await knexConnection.raw(`
            INSERT INTO games(name, img_src, id_publisher) 
            VALUES('${game.name}', '${game.img_src}', '${game.id_publisher}')
        `);
    const idEntity = resultInsert[0].insertId;

    return this.getById(idEntity);
  }

  static async linkGameToPublisher(id_publisher: number, id_game: number) {
    const result = await knexConnection.raw(`
          UPDATE games SET id_publisher = '${id_publisher}' WHERE id = '${id_game}'
    `);
    return result;
  }

  static async getAllGames() {
    const list = await knexConnection.raw(`
      SELECT * FROM games
    `);
    const entities = list[0] as Array<{
      id: number;
      name: string;
      img_src: string;
      id_publisher?: number;
    }>;
    const games = entities.map(
      (entity) =>
        new Game(entity.id, entity.name, entity.img_src, entity.id_publisher)
    );
    return games;
  }
  static async update(id: number, gameUpdated: Game) {
    const resultUpdate = await knexConnection.raw(`
        UPDATE games SET name = '${gameUpdated.name}', 
                         img_src = '${gameUpdated.img_src}',
                         id_publisher = '${gameUpdated.id_publisher}'
        WHERE id = ${id}
    `);
    return this.getById(id);
  }
  static async delete(id: number) {
    const resultDelete = await knexConnection.raw(`
      DELETE FROM games WHERE id = ${id}
    `);
    return resultDelete;
  }
  static async getById(id: number) {
    const list = await knexConnection.raw(`
      SELECT * FROM games WHERE id = ${id}
    `);
    const entities = list[0] as Array<{
      id: number;
      name: string;
      id_publisher?: number;
      img_src: string;
    }>;
    const entityById = entities[0];
    if (!entityById) throw new Error("game não encontrado");
    return new Game(
      entityById.id,
      entityById.name,
      entityById.img_src,
      entityById.id_publisher
    );
  }
}
