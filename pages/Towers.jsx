import React from "react";
import NavbarComp from "../components/NavbarComp";
import ChatMenu from "../components/ChatMenu";
import Footer from "../components/Footer";
import { BsFileLock2Fill } from "react-icons/bs";
import { towersData } from "../gamesData";

let total = [];
for (let i = 0; i < 30; i++) {
  total.push(i);
}

console.log(total);

const Towers = () => {
  return (
    <div>
      <NavbarComp />
      <ChatMenu />
      <div className="pt-24 xl:ml-[80px]">
        <div className="xl:w-[68%] lg:w-[65%] w-[90%] xl:ml-[450px] lg:ml-[405px] mx-auto px lg:h-[600px] h-[700px] bg-[#22242F] rounded-md">
          <div className="flex lg:flex-row flex-col-reverse justify-between items-start py-12">
            <div className="border-t border-b border-r border-gray-700 px-2 py-4 lg:w-[300px] w-[100%] lg:h-[500px]">
              <div>
                <p className="text-white font-semibold font-primary">
                  Bet Amount
                </p>
                <div className="relative">
                    <BsFileLock2Fill className="absolute top-4 left-2 text-2xl text-lightgrey" />
                    <input
                      type="number"
                      className="w-full h-10 bg-[#2F3241] focus:shadow-lg outline-none pl-10 text-white mt-2 font-primary font-semibold tracking-wider"
                    />
                    <div className="flex gap-x-2 absolute right-3 top-3">
                      <button className="text-gray-400 font-semibold font-primary hover:bg-gray-700 p-1">
                        1/2
                      </button>
                      <button className="text-gray-400 font-semibold font-primary hover:bg-gray-700 p-1">
                        2x
                      </button>
                    </div>
                  </div>
              </div>

              <div className="-mt-[10px]">
                <button className="bg-blue-600 w-full h-10 text-white flex justify-center items-center border-2 mt-4 border-blue-800 hover:bg-blue-500 transition duration-200 font-primary font-semibold xl:text-base text-sm z-0 cursor-pointer relative">
                  Insufficent funds
                </button>
              </div>
            </div>
            <div className="border-t border-b border-l border-gray-700 lg:w-3/4 w-[95%] lg:ml-0 mx-auto lg:h-[500px] h-[400px] bg-[#1C1D27] z-0 flex gap-y-4 lg:justify-start justify-center gap-x-[250px]">
              <div className="hidden xl:flex flex-col gap-y-3 py-2 max-h-[550px] w-[150px] h-full px-2 justify-start items-center overflow-y-auto">
                {towersData.map((hit, idx) => (
                  <div
                    key={idx}
                    className="w-[120px] h-[60px] border border-gray-600 rounded-md flex items-center justify-center flex-col"
                  >
                    <h3 className="font-primary text-gray-500 font-semibold text-xs">
                      HIT {hit.id}
                    </h3>
                    <h1 className="text-3xl font-primary text-lightgrey">
                      {hit.hit}
                    </h1>
                  </div>
                ))}
              </div>

              <div className="bg-[#22242F] lg:h-[470px] h-[380px] lg:w-[300px] w-[200px] p-2 lg:mt-3 mt-2 rounded-md grid grid-cols-3 justify-items-center place-items-center lg:gap-x-0 gap-x-2 gap-y-0">
                {total.map((box, idx) => (
                  <div className="bg-[#2F3241] lg:w-[85px] w-[55px] lg:h-[40px] h-[30px] rounded-md border-b-4 border-gray-600"></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-24 xl:ml-[80px]">
        <div className="xl:w-[68%] lg:w-[60%] w-[90%] xl:ml-[450px] lg:ml-[430px] mx-auto lg:mt-0 mt-6 lg:h-[300px] h-[600px] bg-[#1C1D27] rounded-md px-4 py-6">
          <h1 className="text-3xl text-lightgrey font-semibold font-primary">
            Towers
          </h1>
          <div className="flex lg:flex-row flex-col gap-x-24">
            <div className="lg:w-1/4 w-full">
              <div className="mt-2">
                <h2 className="text-lightgrey lg:text-lg text-base font-primary font-semibold">
                  Game Info
                </h2>
                <div className="flex flex-col gap-y-4 mt-4">
                  <div className="flex items-center justify-between px-4 text-lightgrey font-primary font-semibold bg-[#22242F] h-10 xl:text-base text-sm rounded-md">
                    <p>House Edge</p>
                    <p>4%</p>
                  </div>
                  <div
                    className="flex items-center justify-between px-4 text-lightgrey font-primary font-semibold bg-[#22242F] h-10
                xl:text-base text-sm rounded-md"
                  >
                    <p>Max Bet</p>
                    <div className="flex items-center gap-x-2">
                      <p>400.00</p>
                    </div>
                  </div>
                  <div
                    className="flex items-center justify-between px-4 text-lightgrey font-primary font-semibold bg-[#22242F] h-10
                xl:text-base text-sm rounded-md"
                  >
                    <p>Max Win</p>
                    <div className="flex items-center gap-x-2">
                      <p>4,000.000</p>
                      <BsFileLock2Fill className="text-xl" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:w-2/3 w-full xl:mt-2 lg:mt-2 mt-10">
              <h2 className="lg:text-lg text-base font-primary font-semibold text-lightgrey">
                Game Description
              </h2>
              <p className="mt-4 text-lightgrey font-primary bg-[#22242F] px-4 xl:py-7 py-4 rounded-md xl:text-base text-sm">
                This game lets you get the highest multiplier possible by
                climbing the rows to the top of the tower. Make sure to avoid
                the Skulls at all costs, as they will make it very difficult for
                you to reach the tower's roof.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Towers;
