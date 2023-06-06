export class ItemCompra {
  id_compra: number;
  id_games: number;
  qtd: number;
  preco: number;
  constructor(id_compra: number, id_games: number, qtd: number, preco: number) {
    this.id_compra = id_compra;
    this.id_games = id_games;
    this.qtd = qtd;
    this.preco = preco;
  }
}
