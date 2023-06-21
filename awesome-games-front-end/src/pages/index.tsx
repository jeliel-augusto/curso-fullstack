import Image from "next/image";
import { GameCard } from "../components/game/Game";
import { useEffect, useState } from "react";
import { Game } from "../models/Game";
import { GamesAPI } from "../api/gamesAPI";
import { Header } from "../components/header/Header";
import { Sidebar } from "../components/sidebar/Sidebar";

export default function Home() {
  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    // quando este componente for renderizado, faça
    const listOfGames = GamesAPI.getGames();
    setGames(listOfGames);
  }, []);

  return (
    <>
      <Header />
      <Sidebar />
    </>
  );
}
