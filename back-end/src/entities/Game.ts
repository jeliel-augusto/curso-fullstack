import { Publisher } from "./Publisher";

export class Game {
  id: number;
  name: string;
  id_publisher?: number;
  publisher?: Publisher;
  img_src: string;
  constructor(
    id: number,
    name: string,
    img_src: string,
    id_publisher?: number
  ) {
    this.id = id;
    this.name = name;
    this.img_src = img_src;
    this.id_publisher = id_publisher;
  }
}
/**
 * 1 - N --> Um para muitos (Game --> Publicadora)
 * 1 - 1 --> Um para um (User --> Dados Pessoais)
 * N - N --> Muitos para muitos (tabela vinculada) (
 *  Post tem muitos tópicos
 *  Um tópico pode estar em muitos posts
 * )
 */
