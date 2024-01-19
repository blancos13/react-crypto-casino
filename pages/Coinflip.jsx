import React, { useRef, useState } from "react";
import NavbarComp from "../components/NavbarComp";
import ChatMenu from "../components/ChatMenu";
import { BsFileLock2Fill } from "react-icons/bs";
import Coin1 from "../assets/img/coinside1.png";
import Coin2 from "../assets/img/coinside2.png";
import { coinFlipBets } from "../gamesData";
import Tables from "../components/Tables";
import Footer from "../components/Footer";

const Coinflip = () => {
  const [coin, setCoin] = useState(Coin2);
  const [betPlaced, setBetPlaced] = useState(false); // New state variable
  const [betAmount, setBetAmount] = useState(1);

  let inputRef = useRef();
  let btnRef = useRef();

  const onBtnClick = (e) => {
    if (inputRef.current.value <= 0.01) {
      btnRef.current.setAttribute("disabled", "disabled");
    } else {
      setBetPlaced(true); // Set the state to true when the bet is placed
    }
  };

  return (
    <div>
      <NavbarComp />
      <ChatMenu />
      <div className="pt-24 lg:ml-[80px]">
        <div className="xl:w-[68%] lg:w-[80%]  w-[90%] xl:ml-[450px] lg:ml-[420px] mx-auto px lg:h-[600px] h-[700px] bg-[#22242F] rounded-md">
          <div className="flex lg:flex-row flex-col-reverse justify-between items-start py-12">
            <div className="border-t border-b border-r border-gray-700 px-2 py-4 lg:w-[300px] w-[100%] lg:h-[500px]">
              {betPlaced ? (
                <>
                  <p className="text-white font-semibold font-primary">Cashout</p>
                  <div className="relative">
                    <img
                      src="https://growdice.co/currency_dl.png"
                      width="23"
                      height="23"
                      className="absolute top-4 left-2 text-2xl text-lightgrey"
                    />
                    <input
                      type="number"
                      ref={inputRef}
                      value={betAmount}

                      className="w-full h-10 bg-[#2F3241] focus:shadow-lg outline-none pl-10 text-white mt-2 font-primary font-semibold tracking-wider"
                    />
                    <div className="flex gap-x-2 absolute right-3 top-3">
                      {/* Additional buttons or elements for the Cashout section */}
                    </div>
                  </div>
                </>
              ) : (
                <div>
                  <p className="text-white font-semibold font-primary">Bet Amount</p>
                  <div className="relative">
                    <img
                      src="https://growdice.co/currency_dl.png"
                      width="23"
                      height="23"
                      className="absolute top-4 left-2 text-2xl text-lightgrey"
                    />
                    <input
                      type="number"
                      ref={inputRef}
                      value={betAmount}
                      onChange={(e) => setBetAmount(e.target.value)}

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
              )}

              <div className="-mt-[10px]">
                <p className="text-white font-semibold font-primary mt-4">
                  Coin Side
                </p>
                <div className="flex justify-between gap-x-4">
                  <button
                    onClick={() => setCoin(Coin1)}
                    className="fliprender betbutton bg-blue-600 lg:w-1/2 w-full z-0 h-12 flex justify-center items-center border-4 border-blue-800 hover:bg-blue-500 transition duration-200"
                  >
                    <img src={Coin1} alt="" className="fliprender xl:w-8 xl:h-8 h-6 w-6" />
                  </button>
                  <button
                    ref={btnRef}
                    onClick={() => setCoin(Coin2)}
                    className="fliprender betbutton bg-blue-600 lg:w-1/2 w-full z-0 h-12 flex justify-center items-center border-4 border-blue-800 hover:bg-blue-500 transition duration-200"
                  >
                    <img src={Coin2} alt="" className="fliprender xl:w-8 xl:h-8 h-6 w-6" />
                  </button>
                </div>
                {betPlaced ? (
  <>
    <p className="text-white font-semibold font-primary">Total Profit : 0.00x</p>
    <div className="relative">
      <img
        src="https://growdice.co/currency_dl.png"
        width="23"
        height="23"
        className="absolute top-4 left-2 text-2xl text-lightgrey"
      />
      <input
        type="number"
        ref={inputRef}
        className="w-full h-10 bg-[#2F3241] focus:shadow-lg outline-none pl-10 text-white mt-2 font-primary font-semibold tracking-wider"
      />
      <div className="flex gap-x-2 absolute right-3 top-3">
        {/* Additional buttons or elements for the Cashout section */}
      </div>
    </div>
    <button
      className="betbutton bg-blue-600 w-full h-10 text-white flex justify-center items-center border-2 mt-4 border-blue-800 hover:bg-blue-500 transition duration-200 font-primary font-semibold xl:text-base text-sm z-0 cursor-pointer relative"
    >
      Cashout
    </button>
  </>
) : (
  <button
    ref={btnRef}
    onClick={onBtnClick}
    className="betbutton bg-blue-600 w-full h-10 text-white flex justify-center items-center border-2 mt-4 border-blue-800 hover:bg-blue-500 transition duration-200 font-primary font-semibold xl:text-base text-sm z-0 cursor-pointer relative"
  >
    Place Bet
  </button>
)}

</div>
</div>

            <div className="border-t border-b border-l border-gray-700 lg:w-3/4 w-[95%] lg:ml-0 mx-auto lg:h-[500px] h-[400px] bg-[#1C1D27] z-0">
              <div className="flex flex-col items-center border-b border-gray-700 z-0">
                <div className="xl:h-[350px] lg:h-[400px] h-[300px] w-full flex items-center justify-around lg:gap-x-0 gap-x-2 z-0">
                  <div className="w-36 h-24 rounded-md border border-gray-700 flex flex-col justify-center text-center">
                    <h2 className="lg:text-4xl text-xl text-lightgrey font-semibold font-primary">
                      0
                    </h2>
                    <h3 className="text-lightgrey lg:text-xl text-base font-semibold font-primary">
                      HITS
                    </h3>
                  </div>
                  <img
                    src={coin}
                    alt=""
                    className="fliprender lg:w-36 lg:h-36 w-20 h-20"
                  />
                  <div className="w-36 h-24 rounded-md border border-gray-700 flex flex-col justify-center text-center">
                    <h2 className="lg:text-4xl text-xl text-lightgrey font-semibold font-primary">
                      0.00x
                    </h2>
                    <h3 className="text-lightgrey lg:text-xl text-base font-semibold font-primary">
                      MULTIPLIER
                    </h3>
                  </div>
                </div>
              </div>

              <div className="flex flex-row items-center xl:h-[150px] lg:h-[100px] h-[100px] px-4 overflow-x-auto max-w-full gap-x-8 z-50 ">
                {coinFlipBets.map((bet, idx) => {
                  return (
                    <div
                      key={idx}
                      className="bg-[#1A1B24] max-w-24 xl:w-24 xl:h-24 lg:w-16 lg:h-16 w-16 h-16 xl:p-6 rounded-full flex items-center justify-center"
                    >
                      <h2 className="font-primary text-gray-600 font-semibold lg:text-xl text-lg">
                        {bet.bet}
                      </h2>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-24 lg:ml-[80px]">
        <div className="xl:w-[68%] lg:w-[80%]  w-[90%] xl:ml-[450px] lg:ml-[420px] mx-auto lg:mt-0 mt-6 lg:h-[300px] h-[600px] bg-[#1C1D27] rounded-md px-4 py-6">
          <h1 className="text-3xl text-lightgrey font-semibold font-primary">
            Coin Flip
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
                      <BsFileLock2Fill className="text-xl" />
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
                The mechanics of playing this game are simple, and you can toss
                a coin and choose between Heads or Tails. Once you've landed on
                a winning bet, you have the discretion to resume flipping the
                coin for extra rounds, which, in turn, translates to extra
                prizes and higher payouts. Not only that, but the multipliers
                also keep increasing as you keep winning throughout every coin
                flip.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Tables />
      <Footer />
    </div>
  );
};

export default Coinflip;
