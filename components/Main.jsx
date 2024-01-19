import React from "react";
import DiscordImage from "../assets/img/Discord.jpg";
import { imageData } from "../gamesData";
import Images from "./Images";
import Tables from "./Tables";
import MainPart from "./MainPart";

console.log(imageData);

const Main = () => {
  return (
    <div>
      <div className="lg:ml-[420px] ml-4 mr-4 lg:mr-[20px] pt-[100px] relative header lg:w-[65%] xl:w-[75%]">
        <header className="dc-img flex flex-col justify-center items-center">
          <h1 className="text-blue-700 lg:text-4xl md:text-3xl text-xl font-primary font-semibold">
            BOLT.CASINO 
          </h1>
          <h2 className="text-white lg:text-xl font-bold font-primary mt-4">
            JOIN FOR TELEGRAM FOR NEWS & GIVEAWAYS
          </h2>
        </header>
      </div>
    </div>
  );
};

export default Main;
