import { Game } from "../models/Game";

export class GamesAPI {
  static getGames(): Game[] {
    return [
      {
        id: 1,
        name: "God of War 3",
        img_src:
          "https://upload.wikimedia.org/wikipedia/pt/8/82/God_of_War_2018_capa.png",
      },
      {
        id: 2,
        name: "God of War 3",
        img_src:
          "https://upload.wikimedia.org/wikipedia/pt/8/82/God_of_War_2018_capa.png",
      },
      {
        id: 3,
        name: "God of War 3",
        img_src:
          "https://upload.wikimedia.org/wikipedia/pt/8/82/God_of_War_2018_capa.png",
      },
    ];
  }
}
