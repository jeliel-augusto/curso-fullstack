import { knexConnection } from "../db/db";
import { Compra } from "../entities/Compra";
import { ItemCompra } from "../entities/ItemCompra";

export class CompraRepository {
  static async buyGame(itensCompra: ItemCompra[], idCliente: number) {
    let idCompraResult: number | null = null;
    // let error: Error | null = null;
    await knexConnection.transaction(async (scope) => {
      try {
        const resultInsertCompra = await scope.raw(`
                INSERT INTO compra (id_cliente)
                VALUES (${idCliente})
            `);
        const idCompra = resultInsertCompra[0].insertId;
        for (const item of itensCompra) {
          await scope.raw(`
                    INSERT INTO item_compra (id_compra, id_games, qtd, preco)
                    VALUES (${idCompra}, ${item.id_games}, ${item.qtd}, ${item.preco})
                `);
        }
        idCompraResult = idCompra;
      } catch (e) {
        // error = e as Error;
        console.error(e);
        scope.rollback();
      }
    });
    if (idCompraResult === null)
      throw new Error(`Ocorreu um erro ao realizar compra`);
    // if(idCompraResult === null) throw error
    return await this.getCompraById(idCompraResult);
  }
  static async getItensComprasByGame(idGame: number) {
    const itensCompra = await knexConnection.raw(`
      SELECT * FROM item_compra WHERE id_games = ${idGame}
    `);
    const entitiesItensCompras = itensCompra[0] as Array<ItemCompra>;
    return entitiesItensCompras.map(
      (value) =>
        new ItemCompra(value.id_compra, value.id_games, value.qtd, value.preco)
    );
  }
  static async getComprasByClient(idClient: number) {
    const compras = await knexConnection.raw(`
      SELECT * FROM compra WHERE id_cliente = ${idClient}
      ORDER BY dthr
    `);
    const entitiesCompras = compras[0] as Array<{
      id: number;
      id_cliente: number;
      dthr: string;
    }>;
    const results: Compra[] = [];
    for (const entity of entitiesCompras) {
      const compra = new Compra(
        entity.id,
        entity.id_cliente,
        new Date(entity.dthr)
      );
      await CompraRepository.getItensCompraFromCompra(entity.id, compra);
    }
    return results;
  }
  static async getCompraById(idCompra: number) {
    const compras = await knexConnection.raw(`
      SELECT * FROM compra WHERE id = ${idCompra}
    `);
    const entityCompra = compras[0][0] as {
      id: number;
      id_cliente: number;
      dthr: string;
    };
    const compra = new Compra(
      entityCompra.id,
      entityCompra.id_cliente,
      new Date(entityCompra.dthr)
    );
    await this.getItensCompraFromCompra(entityCompra.id, compra);
    return compra;
  }
  private static async getItensCompraFromCompra(
    idCompra: number,
    compra: Compra
  ) {
    const itens = await knexConnection.raw(`
        SELECT * FROM item_compra WHERE id_compra = ${idCompra}
      `);
    const entitiesItens = itens[0] as Array<{
      id_compra: number;
      id_games: number;
      qtd: number;
      preco: number;
    }>;
    compra.itensCompra = entitiesItens.map(
      (value) =>
        new ItemCompra(idCompra, value.id_games, value.qtd, value.preco)
    );
    return itens;
  }
}
