import React from "react";
import { BsFileLock2Fill } from "react-icons/bs";

const UnboxingPage = ({img}) => {
 const {text, image, price} = img
  return (
    <div className="z-0">
      <div className="bg-gray-800 w-[200px] h-[170px] rounded-md border border-gray-600 flex items-center justify-center flex-col hover:bg-gray-700 transition duration-200 z-0">
        <h1 className="text-lightgrey font-primary z-0">{text}</h1>
        <img src={image} alt="" className="w-[100px] mt-2 z-0"/>
        <div className="flex items-center justify-center mt-3 gap-x-2 z-0" >
          <BsFileLock2Fill className="text-lightgrey text-2xl z-0"/>
          <h1 className="text-lg font-primary text-white z-0">{price}</h1>
        </div>
      </div>
    </div>
  );
};

export default UnboxingPage;
