import React from "react";
import { imageData } from "../gamesData";
import { Link } from "react-router-dom";

const Images = () => {
  return (
    <div className="flex flex-wrap xl:gap-x-8 sm:gap-x-2 gap-y-5 w-[calc(79vw-55px)] ">
      {imageData.map((img, idx) => {
        return (
          <div
            key={idx}
            className="flex flex-col items-center gap-y-2 w-[200px] lg:ml-8 hover:transform hover:-translate-y-1 transition-all duration-200 cursor-pointer hover:opacity-80"
          >
            <Link to={img.pathName}>
              <img src={img.image} alt="" className="rounded-lg" />
              <h2 className="text-white text-lg font-semibold text-center">{img.text}</h2>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Images;
