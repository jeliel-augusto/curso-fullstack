import { knexConnection } from "../db/db";
import { Publisher } from "../entities/Publisher";
/**
 * CREATE,
 * READ
 * UPDATE
 * DELETE,
 * GET BY ID
 */
export class PublisherRepository {
  static async save(publisher: Publisher) {
    const insertResult = await knexConnection.raw(`
            INSERT INTO publishers(name) VALUES('${publisher.name}')
        `);
    return insertResult;
  }
  static async getAllPublishers() {
    const list = await knexConnection.raw(`
            SELECT * FROM publishers
        `);
    const entities = list[0] as Array<{
      id: number;
      name: string;
    }>;
    const publishers = entities.map(
      (entity) => new Publisher(entity.id, entity.name)
    );
    return publishers;
  }
  static async update(id: number, publisher: Publisher) {
    const updateResult = await knexConnection.raw(`
            UPDATE publishers SET name = '${publisher.name}' WHERE id = ${id}
        `);
    return updateResult;
  }
  static async delete(id: number) {
    const deleteResult = await knexConnection.raw(`
            DELETE FROM publishers WHERE id = ${id}
        `);
    return deleteResult;
  }
  static async getById(id: number) {
    const list = await knexConnection.raw(
      `SELECT * FROM publishers WHERE id = ${id}`
    );
    const entities = list[0] as Array<{
      id: number;
      name: string;
    }>;
    const publisher = entities[0];
    if (!publisher) throw new Error("Publicadora não encontrada!");
    return new Publisher(publisher.id, publisher.name);
  }
}
/**
 * [
 *  [{ elemento1 }, { elemento2 }], --> 0 dados
 * {
 *  ...
 *  ...
 * } --> 1 metadados
 * ]
 *
 */
