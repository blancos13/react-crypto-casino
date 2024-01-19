import React from "react";

import { games } from "../GameNames";
import GameItem from "./GameItem";

export default function GameList() {
    return (
        <div className="mx-6 mt-10 grid grid-cols-12 gap-4 two mt-4 flex flex-wrap lg:ml-[450px] ml-10 ">
            {games.map((game) => {
                return (
                    <GameItem gameName = {game} key={game}/>
                )
            })}
        </div>
    )
}