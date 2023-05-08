const games = [
  {
    id: 1,
    name: `Call of Duty`,
    publisher: `Activision`,
  },
  {
    id: 2,
    name: `God of War`,
    publisher: `Santa Monica`,
  },
];
export class GameService {
  static getGames() {
    return games;
  }
  static updateGameById(id: number, obj: { name: string }) {
    const gameExistent = games.find((game) => game.id === id);
    if (gameExistent) {
      gameExistent.name = obj.name;
    }
    return gameExistent;
  }
}
