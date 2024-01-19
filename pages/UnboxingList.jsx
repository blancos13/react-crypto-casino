import React from "react";
import { unboxingData } from "../unboxingData";
import { useParams } from "react-router-dom";
import NavbarComp from "../components/NavbarComp";
import ChatMenu from "../components/ChatMenu";
import Footer from "../components/Footer";
import { BsFileLock2Fill } from "react-icons/bs";
import Tables from "../components/Tables";

const UnboxingList = () => {
  const { id } = useParams();
  console.log(id);

  const boxes = unboxingData.find((box) => {
    return box.id === parseInt(id);
  });

  console.log(boxes);

  console.log(
    boxes.text_img.map((txt, idx) => {
      console.log(txt.image);
    })
  );

  return (
    <div className="text-white">
      <NavbarComp />
      <ChatMenu />
      <div className="xl:ml-[480px] ml-[50px] xl:w-[70%] w-[95%] pt-24 flex lg:flex-row flex-col justify-between gap-x-10 items-start">
        <div className="w-[80%]">
          <div className="rounded-md">
            <div className="bg-[#1C1D27]">
              <div className="mt-8 xl:h-[300px]">
                <div className="flex lg:flex-row flex-col items-start justify-start gap-x-8 pt-12 px-6">
                  <img src={boxes.image} alt="" className="imagenew xl:w-[175px] w-[80px]" />
                  <div>
                    <h1 className="font-primary lg:text-3xl font-semibold">
                      {boxes.text}
                    </h1>
                    <div className="mt-4 flex lg:flex-row flex-col items-center justify-center lg:gap-x-4 lg:gap-y-0 gap-y-4">
                      <div className="relative">
                        <button className="playbutton lg:py-2 py-1 lg:px-10 px-8 lg:text-base text-sm font-primary font-semibold rounded-sm border-4 border-blue-700 lg:mr-4 hover:bg-blue-800 transition duration-200 z-0">
Open for {boxes.price}
                        </button>
                        <BsFileLock2Fill className="absolute lg:right-5 right-3 lg:top-[0.5rem] top-[0.65rem] lg:text-2xl" />
                      </div>
                      <div className="z-0">
                        <button className="bg-[#323645] border-gray-800 border-4 lg:py-2 py-1 lg:px-10 px-10 lg:text-base text-sm font-primary rounded-sm   hover:bg-gray-800 transition duration-200 font-semibold">
                          Demo Spin
                        </button>
                      </div>
                    </div>
                    <div className="mt-4 flex items-center justify-start gap-x-3 z-0">
                      <input
                        type="checkbox"
                        className="accent-gray-500 lg:w-6 lg:h-6 z-0"
                      />
                      <label className="text-lightgrey font-primary">
                        Fast Opening
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center px-4 mt-20 bg-[#1C1D27] w-full h-[270px]">
            {
              boxes.text_img.map((txt, idx) => {
                return (
                  <div key={idx}>
                    <img src={txt.image} className="imagenew w-[80px] h-[80px]" alt="" />
                  </div>
                )
              })
            }
          </div>
        </div>

        <div className="lg:mt-0 mt-8">
          <h1 className="text-2xl">ITEMS IN THIS CASE</h1>
          <div className="xl:w-[450px] w-[80%] bg-[#1C1D27] mt-0 max-h-[650px] h-full flex flex-wrap items-start justify-start gap-x-2 gap-y-4 px-12 py-4 overflow-y-auto">
            {boxes.text_img.map((txt, idx) => {
              return (
                <div
                  key={idx}
                  className="two w-[160px] h-[220px] bg-[#22242F] flex flex-col items-center justify-center p-2 relative font-primary rounded-md border-2 border-gray-600 hover:bg-gray-700 cursor-pointer transition duration-200"
                >
                  <div className="two absolute top-2 left-2 text-lightgrey">
                    <p className="text-sm">{txt.percent}</p>
                  </div>
                  <div className="flex flex-col items-center justify-center mt-2">
                    <img src={txt.image} alt="" className="imagenew lg:w-[80px] lg:h-[80px] w-[50px] h-[50px]" />
                    <h1 className="text-center h-16 mt-2 font-semibold text-white">
                      {txt.text}
                    </h1>
                  </div>
                  <div className="flex justify-center items-center gap-x-2 mt-2">
                    <p>{txt.price}</p>
                    <BsFileLock2Fill className="text-xl" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <Tables/>
      <Footer />
    </div>
  );
};

export default UnboxingList;
