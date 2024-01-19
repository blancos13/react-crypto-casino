import React from "react";
import NavbarComp from "../components/NavbarComp";
import ChatMenu from "../components/ChatMenu";
import Footer from "../components/Footer";
import { BsFileLock2Fill } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import Tables from "../components/Tables";

const Crash = () => {
  return (
    <div>
      <NavbarComp />
      <ChatMenu />
      <div className="pt-36 flex xl:justify-stretch justify-between">
        <div className="xl:ml-[450px] lg:ml-[650px] sm:ml-[50px] ml-[40px] flex flex-col gap-y-8 py-12 px-8 xl:w-[55%] lg:w-[99%] sm:w-[90%] w-[80%] h-[800px] text-white  bg-[#1C1D27] font-primary">
          <div>
            <div className="flex flex-col lg:gap-y-16 gap-y-6">
              <div className="flex gap-x-4 items-center">
                <p>1.2x</p>
                <div className="w-[90%] h-[2px] bg-gray-500"></div>
              </div>
              <div className="flex gap-x-4 items-center">
                <p>1.4x</p>
                <div className="w-[90%] h-[2px] bg-gray-500"></div>
              </div>
              <div className="flex gap-x-4 items-center">
                <p>1.6x</p>
                <div className="w-[90%] h-[2px] bg-gray-500"></div>
              </div>
              <div className="flex gap-x-4 items-center">
                <p>1.8x</p>
                <div className="w-[90%] h-[2px] bg-gray-500"></div>
              </div>
              <div className="flex gap-x-4 items-center">
                <p>1.2x</p>
                <div className="w-[90%] h-[2px] bg-gray-500"></div>
              </div>
            </div>
            <div className="flex justify-between lg:w-[90%] lg:gap-x-0 gap-x-5 px-12 mt-8">
              <p>0s</p>
              <p>2s</p>
              <p>4s</p>
              <p>6s</p>
              <p>8s</p>
            </div>
          </div>
          <div className="bg-[#22242F] h-[250px] flex flex-col justify-center gap-y-4 font-primary rounded-md px-2">
            <div>
              <p>Bet Amount</p>
              <div className="relative">
                <BsFileLock2Fill className="text-xl absolute top-2 left-3" />
                <input
                  type="text"
                  value="0.01"
                  readOnly
                  className="w-full h-10 bg-[#292B38] pl-12"
                />
                <p className="absolute right-16 top-2">1/2</p>
                <p className="absolute right-8 top-2">2x</p>
              </div>
            </div>
            <div>
              <p>Auto Cashout</p>
              <div className="relative">
                <AiOutlineClose className="text-xl absolute top-2 left-3" />
                <input
                  type="text"
                  value="0.01"
                  readOnly
                  className="w-full h-10 bg-[#292B38] pl-12"
                />
                <p className="absolute right-16 top-2">1/2</p>
                <p className="absolute right-8 top-2">2x</p>
              </div>
            </div>
            <div>
              <button className="flex items-center justify-center w-full bg-blue-700 h-10 rounded-md">Insufficient Funds</button>
            </div>
          </div>
        </div>

        <div className="bg-[#1C1D27] lg:w-[300px] w-[200px] h-[800px] xl:ml-[50px] sm:ml-[250px] px-4 py-4 font-primary xl:block hidden">
          <div className="flex justify-between">
            <div className="flex items-center gap-x-3">
              <div className="w-4 h-4 bg-green rounded-full"></div>
              <div>
                <p className="text-lightgrey font-semibold">X Player</p>
              </div>
            </div>
            <div className="flex items-center gap-x-3 text-lightgrey font-semibold">
              <div>5.92</div>
              <BsFileLock2Fill/>
            </div>
          </div>
        </div>
      </div>
      <Tables />
      <Footer />
    </div>
  );
};

export default Crash;
