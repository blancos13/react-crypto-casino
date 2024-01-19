import React, { useRef, useState, useEffect } from "react";
import NavbarComp from "../components/NavbarComp";
import ChatMenu from "../components/ChatMenu";
import Main from "../components/Main";
import Footer from "../components/Footer";
import { BsFileLock2Fill } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import { GoArrowSwitch } from "react-icons/go";
import Ripples from 'react-ripples'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import io from 'socket.io-client'; // Import the Socket.io client library
import axios from 'axios';
import { Card, Skeleton, Button, Checkbox } from '@nextui-org/react';
import * as CryptoJS from 'crypto-js';
const Limbo = () => {
  const [socket, setSocket] = useState(null);
  const [username, setUsername] = useState('');
  const [balance, setBalance] = useState(0.00);
  const [level, setLevel] = useState('');
  const nrRoll_1 = getRandomInt(0, 9);
  const nrRoll_2 = getRandomInt(0, 9);
  const nrRoll_3 = getRandomInt(0, 9);
  const nrRoll_4 = getRandomInt(0, 9);
  const [currentRoll, setCurrentRoll] = useState(null);
  const [playerpoint, setPlayer] = useState(null);
  const [housepoint, setHouse] = useState(null);
  

  const [rangeData, setRangeData] = useState(50);
  const [inputColor, setInputColor] = useState(false);
  let inputRef = useRef();
  const [betAmount, setBetAmount] = useState(1);
  const [MultiplierAmount, setMultiplierAmount] = useState(1);

  useEffect(() => {
    // Initialize socket connection
    const socket = io('http://localhost:3001');
  
    // Set the socket state
    setSocket(socket);
  
    // Variable to track if the component is mounted
    let isMounted = true;
  
    // Listen for 'connect' event to check if the connection is successful
    socket.on('connect', async () => {
      console.log('Socket connected');
      
      try {
        // Emit 'getUserData' event to request user data from the server
        socket.emit('getUserData'); // en onemlisi
  
        // Use a Promise to wait for the 'userData' event from the server
        const userData = await new Promise((resolve) => {
          // Listen for 'userData' event from the server
          socket.on('userData', (data) => resolve(data));
        });
  
        // Check if the component is still mounted
        if (isMounted) {
          if (userData.success) {
            const {
              id,
              username,
              email,
              balance,
              total_bets,
              games_won,
              total_wagered,
              net_profit,
              all_time_high,
              all_time_low,
              total_deposited,
              total_withdrawn,
              join_date,
              level,
              xp
            } = userData.userData;
  
            // Update state variables accordingly
            setUsername(username);
            setBalance(balance);
            setLevel(level);
          } else {
            // Handle error
            console.error("Failed to fetch user data");
          }
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    });
  
    // Clean up the event listener when the component unmounts
    return () => {
      isMounted = false;
      socket.disconnect();
    };
  }, []);  
  function roundedToFixed(number, decimals){
    number = Number((parseFloat(number).toFixed(5)));
    
    var number_string = number.toString();
    var decimals_string = 0;
    
    if(number_string.split('.')[1] !== undefined) decimals_string = number_string.split('.')[1].length;
    
    while(decimals_string - decimals > 0) {
      number_string = number_string.slice(0, -1);
      
      decimals_string --;
    }
    
    return Number(number_string);
  }
  

  const HOUSE_EDGE = 4; // Limbo game has a 4% house edge
  const MAX_MULTIPLIER = 1000.00; // Limbo game has a 1000.00x max multiplier
    
  function generateRandomString(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
  }
  
  
  //console.log(`Generated Game Seed: ${generatedGameSeed}`);
  //console.log(`Crash Point: ${crashPoint}x`);
    

  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

const fetchUserData = async () => {
  try {
   const token = localStorage.getItem("token");
     const response = await axios.get("http://localhost:3001/getUserData", {
       headers: {
         Authorization: `Bearer ${token}`,
       },
     });

     if (response.data.success) {
       const userData = response.data; // Assuming response.data contains all the fields

       // Set state variables using destructuring
       const {
         id,
         username,
         email,
         balance,
         total_bets,
         games_won,
         total_wagered,
         net_profit,
         all_time_high,
         all_time_low,
         total_deposited,
         total_withdrawn,
         join_date,
         level,
         xp
       } = userData;

       // Now set your state variables accordingly
       setUsername(username);
       //setBalance(balance);
       setLevel(level);
     } else {
       // Handle error
       console.error("Failed to fetch user data");
     }
   } catch (error) {
     console.error("Error fetching user data:", error);
   }
 };
 function sha256(s) {
  return CryptoJS.SHA256(s).toString(CryptoJS.enc.Hex);
}

function getGameHash(gameSeed, clientSeed) {
  return CryptoJS.HmacSHA256(gameSeed, clientSeed).toString(CryptoJS.enc.Hex);
}

function getNumberFromHash(gameHash) {
  return parseInt(gameHash.slice(0, 52 / 4), 16);
}

function createRandom(seed) {
  return function () {
    seed = ((seed + 0x7ED55D16) + (seed << 12)) & 0xFFFFFFFF;
    seed = ((seed ^ 0xC761C23C) ^ (seed >>> 19)) & 0xFFFFFFFF;
    seed = ((seed + 0x165667B1) + (seed << 5)) & 0xFFFFFFFF;
    seed = ((seed + 0xD3A2646C) ^ (seed << 9)) & 0xFFFFFFFF;
    seed = ((seed + 0xFD7046C5) + (seed << 3)) & 0xFFFFFFFF;
    seed = ((seed ^ 0xB55A4F09) ^ (seed >>> 16)) & 0xFFFFFFFF;
    return seed;
  };
}

function getRouletteNumbers(gameHash) {
  const seed = getNumberFromHash(gameHash);
  const random = createRandom(seed);

  const numbers = {};
  numbers.player = Math.abs(random() % (36 + 1));
  numbers.house = Math.abs(random() % (36 + 1));
  return numbers;
}

   // fetchUserData();
   function generateRandomGame() {
    // Generate a random game seed
    let gameSeed = generateRandomString(32);

    const clientSeed = '893a28219f012dc6ad42e442a9eaa926dddbea4d7f5ff16ddfeb3b5a72ef6094';

    function sha256(s) {
      return CryptoJS.SHA256(s).toString(CryptoJS.enc.Hex);
    }

    function clamp(num, min, max) {
      return Math.min(Math.max(num, min), max);
    }

    function getGameHash(gameSeed, clientSeed) {
      return CryptoJS.HmacSHA256(clientSeed, gameSeed).toString(CryptoJS.enc.Hex);
    }

    function getNumberFromHash(gameHash) {
      return parseInt(gameHash.slice(0, 52 / 4), 16);
    }

    function getCrashPoint(gameHash) {
      const n = getNumberFromHash(gameHash);
      const e = Math.pow(2, 52);
      const num = Math.floor(((100 - HOUSE_EDGE) * e - n) / (e - n)) / 100;
      return clamp(num, 1.00, MAX_MULTIPLIER);
    }

    gameSeed = sha256(gameSeed);
    const gameHash = getGameHash(gameSeed, clientSeed);
    const crashPoint = getCrashPoint(gameHash);

    return {
      generatedGameSeed: gameSeed,
      crashPoint: crashPoint
    };
  }
  const calculateSum = (number) => {
    const digitSum = number.toString().split('').reduce((acc, digit) => acc + parseInt(digit), 0);
    return digitSum;
  };
  

  const handlePlaceBets = async () => {
    try {
      const token = localStorage.getItem("token");
  
      // Generate a random game
      const clientSeed = '893a28219f012dc6ad42e442a9eaa926dddbea4d7f5ff16ddfeb3b5a72ef6094'; // Make sure it's a string
      let gameSeed = generateRandomString(32);
  
      const gameHash = getGameHash(gameSeed, clientSeed);
      const { player, house } = getRouletteNumbers(gameHash);
  
      gameSeed = sha256(gameSeed);
  
      console.log(`You got: ${player}`);
      console.log(`House got: ${house}`);
      console.log(`Previous Game Seed: ${gameSeed}`);
  
      // Now you can use the player and house values in your logic
      setPlayer(player);
      setHouse(house);
  
      const playerWins = calculateSum(player) > calculateSum(house);
      const playerLoses = calculateSum(player) < calculateSum(house);
      const playersame = calculateSum(player) === calculateSum(house);
  
      if (playerWins) {
        let winamount;
  
        if (player === 28 || player === 19 || player === 0) {
          winamount = betAmount * 3;
        } else {
          winamount = betAmount * 2;
        }
  
        console.log('Win Amount (Win):', winamount);
        toast.success(`Place Bet successful! You won ${winamount} coins player win!.`);
        setBalance(winamount);
        socket.emit('winbet', { winamount, username });
      } else if (playerLoses) {
        const loseamount = -betAmount;
        console.log('Updated Balance (Loss):', loseamount);
        setBalance(loseamount);
        toast.error(` You Lost ${betAmount} coins house win!.`);
        socket.emit('losebet', { loseamount, username });
      } else if (playersame) {
        const loseamount = -betAmount;
        console.log('Updated Balance (Loss):', loseamount);
        setBalance(loseamount);
        toast.warning(` You Tie ${betAmount} coins house win!.`);
        socket.emit('losebet', { loseamount, username });

      }
    } catch (error) {
      console.error('Error placing bet:', error.message);
      toast.error('Error placing bet');
    }
  };
  

            

  return (
    <div>
      <NavbarComp />
      <ChatMenu />
      <div>
        <div className="pt-24 xl:ml-[80px]">
          <div className="xl:w-[68%] lg:w-[80%]  w-[90%] xl:ml-[450px] lg:ml-[420px] mx-auto lg:h-[600px] h-[700px] bg-[#22242F] rounded-md">
            <div className="flex lg:flex-row flex-col-reverse justify-between items-start py-12">
              <div className="border-t border-b border-r border-gray-700 px-2 py-4 lg:w-[300px] w-[100%] lg:h-[500px]">
                <div>
                  <p className="text-white font-semibold font-primary">
                    Bet Amount
                  </p>

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
                      value={betAmount}
                      onChange={(e) => setBetAmount(e.target.value)}
                    />
                    <div className="flex gap-x-2 absolute right-3 top-3">
                      <button
                        className="text-gray-400 font-semibold font-primary hover:bg-gray-700 p-1"
                        onClick={() =>
                          setBetAmount((prevAmount) => prevAmount / 2)
                        }
                      >
                        1/2
                      </button>
                      <button
                        className="text-gray-400 font-semibold font-primary hover:bg-gray-700 p-1"
                        onClick={() =>
                          setBetAmount((prevAmount) => prevAmount * 2)
                        }
                      >
                        2x
                      </button>
                    </div>
                  </div>
                </div>


                <div className="-mt-[10px]">

                  <Button
        className="betbutton bg-blue-600 w-full h-10 text-white flex justify-center items-center border-2 mt-4 border-blue-800 hover:bg-blue-500 transition duration-200 font-primary font-semibold xl:text-base text-sm z-0 cursor-pointer relative transition duration-200"
        onClick={handlePlaceBets}
        
                  >
                    Place Bet
                  </Button>
                  

                </div>

              </div>
              <div className="border-t border-b border-l border-gray-700 lg:w-3/4 w-[95%] lg:ml-0 mx-auto lg:h-[500px] h-[400px] bg-[#1C1D27] z-0 relative">
  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
    <div
      style={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 'min(140px, 18vw)',
        fontWeight: 600,
        opacity: 0.7,
        userSelect: 'none',
      }}
    >
      {playerpoint && <div>{playerpoint}</div>}
      {housepoint && <div>{housepoint}</div>}
    </div>
  </div>
</div>





            </div>
          </div>
        </div>

        <div className="pt-24 xl:ml-[80px]">
          <div className="xl:w-[68%] lg:w-[80%]  w-[90%] xl:ml-[450px] lg:ml-[420px] mx-auto lg:mt-0 mt-6 lg:h-[300px] h-[600px] bg-[#1C1D27] rounded-md px-4 py-6">
            <h1 className="text-3xl text-lightgrey font-semibold font-primary">
              Limbo
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
Limbo is straightforward and simple, yet engaging all the same. This is why it's ideal for all players regardless of experience or expertise, as well as any budget and risks of appetite.

You have the choice to go either really small or make a beeline for bigger wins as high a 1,000.00x your bet.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <ToastContainer
  position="top-right"
  autoClose={2500}
  hideProgressBar={false}
  newestOnTop={false}
  closeOnClick
  rtl={false}
  pauseOnFocusLoss
  draggable
  pauseOnHover
  theme="white"
  style={{
    fontSize: '14px',
    padding: '10px',
    maxWidth: '100%',
  }}
/>

    </div>

  );
};

export default Limbo;
