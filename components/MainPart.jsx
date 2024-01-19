import React from "react";
import Images from "./Images";
import Tables from "./Tables";

const MainPart = () => {
  return (
    <div>
      <div className="two mt-4 flex flex-wrap lg:ml-[450px] ml-10">
        <div className="two flex flex-col justify-center items-center md:ml-8 lg:ml-8 xl:-ml-2 w-full">
          <Images />
        </div>
      </div>
    </div>
  );
};

export default MainPart;
