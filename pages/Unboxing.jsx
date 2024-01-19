import React, { useContext } from "react";
import NavbarComp from "../components/NavbarComp";
import ChatMenu from "../components/ChatMenu";
import Footer from "../components/Footer";
// import { unboxingData } from "../unboxingData";
import UnboxingPage from "./UnboxingPage";
import { Link } from "react-router-dom";
import UnboxingList from "./UnboxingList";
import { BoxContext } from "../context/BoxContext";

const Unboxing = () => {
  const { box } = useContext(BoxContext);

  return (
    <div>
      <NavbarComp />
      <ChatMenu />
      <div className="pt-48 xl:ml-[400px] h-screen">
        <div className="pt-8 xl:w-[95%] lg:w-[60%] w-[90%] mx-auto rounded-md">
          <div className="flex lg:flex-row flex-col lg:gap-y-0 gap-y-4 justify-between items-center px-4 ">
            <div className="flex gap-x-3 items-center">
              <label className="text-lightgrey font-primary xl:text-lg text-xs w-[100px] ">
                Search Case
              </label>
              <input
                type="text"
                className="xl:w-[550px] xl:h-10 rounded-md bg-[#22242F] border-none outline-none border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block lg:w-[200px] w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 z-0"
              />
            </div>
            <div className="flex gap-x-3 items-center w-full">
              <label className="text-lightgrey font-primary xl:text-lg text-xs w-[90px]">
                Order By
              </label>
              <select
                name="order"
                id="order"
                className="xl:w-[550px] xl:h-10 rounded-md bg-[#22242F] border-none outline-none border border-gray-300 text-gray-900 text-sm   focus:ring-blue-500 focus:border-blue-500 block lg:w-[200px] w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 z-0"
              >
                <option value="low" className="border-none h-3">
                  Low To High
                </option>
                <option value="low">High To Low</option>
              </select>
            </div>
          </div>
        </div>

        <div className="grid xl:grid-cols-6 sm:grid-cols-3 grid-cols-1 justify-items-center place-items-center gap-y-4 mt-24">
          {box.map((img, idx) => {
            return (
              <Link key={idx} to={`/games/${img.id}`}>
                  <UnboxingPage key={idx} img={img} />
              </Link>
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Unboxing;
