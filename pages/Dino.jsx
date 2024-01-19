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
import md5 from 'crypto-js/md5';

const Dino = () => {
  const [sessionToken, setSessionToken] = useState('');
  const [balanceResponse, setBalanceResponse] = useState('');
  const [winResponse, setWinResponse] = useState('');
  const [iframeStyle, setIframeStyle] = useState({
    backgroundColor: '#f0f0f0', // Set your initial background color here
    width: '100%',
    height: '100%',
  });

  const changeBackgroundColor = () => {
    // Change the background color dynamically
    setIframeStyle((prevStyle) => ({
      ...prevStyle,
      backgroundColor: '#yourNewColor', // Set your desired background color here
    }));
  };
  const [isAndroid, setIsAndroid] = useState(false);
  useEffect(() => {
    const iframe = document.querySelector("#gameIframe");
    const userAgent = navigator.userAgent.toLowerCase();
    const isAndroid = userAgent.indexOf("android") > -1;

    if (isAndroid && iframe) {
      // Redirect to a different URL for Android
      iframe.src = "https://your-android-url.com";
    }
  }, []);

  useEffect(() => {
    // Check if the user is on an Android device
    const userAgent = navigator.userAgent.toLowerCase();
    setIsAndroid(userAgent.indexOf("android") > -1);

    // Add event listener for changes in fullscreen mode
    const handleFullScreenChange = () => {
      if (document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement) {
        // Fullscreen mode is active
      } else {
        // Fullscreen mode is exited
      }
    };

    document.addEventListener("fullscreenchange", handleFullScreenChange);
    document.addEventListener("mozfullscreenchange", handleFullScreenChange);
    document.addEventListener("webkitfullscreenchange", handleFullScreenChange);
    document.addEventListener("msfullscreenchange", handleFullScreenChange);

    // Clean up event listeners when the component unmounts
    return () => {
      document.removeEventListener("fullscreenchange", handleFullScreenChange);
      document.removeEventListener("mozfullscreenchange", handleFullScreenChange);
      document.removeEventListener("webkitfullscreenchange", handleFullScreenChange);
      document.removeEventListener("msfullscreenchange", handleFullScreenChange);
    };
  }, []);

  const handleFullScreen = () => {
    const iframe = document.querySelector("#gameIframe");

    if (isAndroid) {
      // For Android, request fullscreen directly
      if (iframe.requestFullscreen) {
        iframe.requestFullscreen();
      } else if (iframe.mozRequestFullScreen) {
        iframe.mozRequestFullScreen();
      } else if (iframe.webkitRequestFullscreen) {
        iframe.webkitRequestFullscreen();
      } else if (iframe.msRequestFullscreen) {
        iframe.msRequestFullscreen();
      }
    } else {
      // For other platforms, use the Fullscreen API
      if (iframe.requestFullscreen) {
        iframe.requestFullscreen();
      } else if (iframe.mozRequestFullScreen) {
        iframe.mozRequestFullScreen();
      } else if (iframe.webkitRequestFullscreen) {
        iframe.webkitRequestFullscreen();
      } else if (iframe.msRequestFullscreen) {
        iframe.msRequestFullscreen();
      }
    }
  };
  useEffect(() => {
    const iframe = document.querySelector("#gameIframe");

    const userAgent = navigator.userAgent.toLowerCase();
    const isAndroid = userAgent.indexOf("android") > -1;

    if (isAndroid) {
      // Attempt to request fullscreen on Android
      if (iframe && iframe.requestFullscreen) {
        iframe.requestFullscreen();
      } else if (iframe && iframe.mozRequestFullScreen) {
        iframe.mozRequestFullScreen();
      } else if (iframe && iframe.webkitRequestFullscreen) {
        iframe.webkitRequestFullscreen();
      } else if (iframe && iframe.msRequestFullscreen) {
        iframe.msRequestFullscreen();
      }
    }
  }, []);


  const [socket, setSocket] = useState(null);
  const [username, setUsername] = useState('');
  const [balance, setBalance] = useState(0.00);
  const [level, setLevel] = useState('');
  const nrRoll_1 = getRandomInt(0, 9);
  const nrRoll_2 = getRandomInt(0, 9);
  const nrRoll_3 = getRandomInt(0, 9);
  const nrRoll_4 = getRandomInt(0, 9);
  const [currentRoll, setCurrentRoll] = useState(null);
  const [DiceResult, SetDiceResult] = useState(null);

  const rollDice = roundedToFixed(parseFloat((nrRoll_1 * 1000 + nrRoll_2 * 100 + nrRoll_3 * 10 + nrRoll_4) / 100), 2);

  const [rangeData, setRangeData] = useState(50);
  const [inputColor, setInputColor] = useState(false);
  let inputRef = useRef();
  const [betAmount, setBetAmount] = useState(1);
   
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
  
  
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }


  
  const openSession = async () => {
    const url = 'https://sandbox.fgstatic.xyz/api/session/open';
    const clientToken = '49e369fa808be4f35c1e99fb8bbb82f';
      const body = {
        "user_id": 1,
        "currency": "TND",
      "balance": 100000
      };
  
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Token': clientToken,
        'Message-Signature': generateSignature(body),
      },
      body: JSON.stringify(body),
    });
  
    const data = await response.json();
    setSessionToken(data.result.session_token);
  };


  const placeBet = async () => {
    const seamlessURL = 'http://localhost:5173';
    const url = `${seamlessURL}/bet`;
    const body = {
      user_id: 1,
      value: 100,
      bet_id: '1',
      game_name: 'plinko',
    };
  
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Message-Signature': generateSignature(body),
      },
      body: JSON.stringify(body),
    });
  
    const data = await response.json();
    setBalanceResponse(data);
  };
  const winBet = async () => {
    const seamlessURL = 'http://localhost:5173';
    const url = `${seamlessURL}/win`;
    const body = {
      user_id: 1,
      value: 100,
      bet_id: '1',
      game_name: 'plinko',
      coefficient: 'float',
    };
  
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Message-Signature': generateSignature(body),
      },
      body: JSON.stringify(body),
    });
  
    const data = await response.json();
    setWinResponse(data);
  };
  
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
  
   // fetchUserData();
   function generateRandomString(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
  }


   const handlePlaceBet = async () => {
    try {
      const token = localStorage.getItem("token");
  
  
      function sha256(s) {
        return CryptoJS.SHA256(s).toString(CryptoJS.enc.Hex);
      }
      
      function getGameHash(gameSeed, clientSeed) {
        return CryptoJS.HmacSHA256(clientSeed, gameSeed).toString(CryptoJS.enc.Hex);
      }
      
      function getNumberFromHash(gameHash) {
        return parseInt(gameHash.slice(0, 52 / 4), 16);
      }
      
      function getRoll(gameHash) {
        const seed = getNumberFromHash(gameHash);
        const roll = Math.abs((seed % 1000) + 1);
        return roll;
      }
      
      const clientSeed = '893a28219f012dc6ad42e442a9eaa926dddbea4d7f5ff16ddfeb3b5a72ef6094';
      let gameSeed = generateRandomString(32);
      const newGameSeed = sha256(gameSeed.toString());
      gameSeed = sha256(gameSeed);

      const gameHash = getGameHash(gameSeed, clientSeed);
      const roll = getRoll(gameHash);
      
      console.log(`Dice: ${roll / 10}`);
      const diceresult = (roll / 10);
      console.log(`Roll: ${roll}`);
      console.log(`Hash: ${gameHash}`);
      console.log(`gameSeed: ${gameSeed}`);
      SetDiceResult(diceresult);

      // Calculate the multiplier based on the rollDice value and the rangeData
      const multiplier = (94 / rangeData).toFixed(2);
  
      console.log('Roll Dice:', rollDice);
      console.log('Multiplier:', multiplier);
      console.log('Bet Amount:', betAmount);
  
      // Check if the player wins based on the rollDice value and rangeData
      const playerWins = diceresult < rangeData;
      const playerLost = diceresult > rangeData;
  
      if (playerWins) {
        const totalamount = betAmount * multiplier / 2;
        const winamount = totalamount; // Convert to integer
        console.log('winamount Balance (Win):', winamount);
        setBalance(winamount);
        socket.emit('winbet', { winamount, username });

        toast.success(`Place Bet successful! You won ${(betAmount * multiplier)} coins.`);
      } else if (playerLost) {
        const loseamountt = betAmount;
        const loseamount = (- betAmount); // Convert to integer
        console.log('Updated Balance (Loss):', loseamount);
        setBalance(loseamount);
        toast.error(`Place Bet successful! You Lost ${(betAmount)} coins.`);
        socket.emit('losebet', { loseamount, username });

      }
  
      // Emit 'getUserData' event to request updated user data from the server
      // socket.emit('getUserData');
    } catch (error) {
      console.error('Error placing bet:', error.message);
      // Handle the error, possibly show an error toast to the user
      toast.error('Error placing bet');
    }
  };



  return (
    <div>
      <NavbarComp />
      <ChatMenu />
      <div>
        
        <div className="pt-24 xl:ml-[80px]">
          <div className="xl:w-[66%] lg:w-[80%]  w-[90%] xl:ml-[450px] lg:ml-[420px] mx-auto lg:h-[700px] h-[700px] bg-[#22242F] rounded-md">

          <iframe
              id="gameIframe"
              src="https://dino.sandbox.fgstatic.xyz/game?token=4ef464a85a182f76c18f47870466badd9b9cbd5f&lang=en&homeUrl=https://topia.casino/"
              className="w-full h-full"
              frameBorder="0"
              title="Game iframe"
              allowFullScreen
            ></iframe>




</div>


                    
        </div>

        <div className="pt-24 xl:ml-[80px]">
          <div className="xl:w-[68%] lg:w-[80%]  w-[90%] xl:ml-[450px] lg:ml-[420px] mx-auto lg:mt-0 mt-6 lg:h-[300px] h-[600px] bg-[#1C1D27] rounded-md px-4 py-6">
            <h1 className="text-3xl text-lightgrey font-semibold font-primary">
              Dino
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
                  Dice is a GrowDice game and is a simple game of chance with
                  easy-to-understand betting mechanics for players to bet with.
                  With betting games like dice, the concept is simple and the
                  possibilities are endless with a variety of betting options
                  available to players to help manage their bankroll and
                  implement dice betting strategies to their gameplay.
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
          fontSize: '14px', // Adjust the font size
          padding: '10px', // Adjust the padding
          maxWidth: '100%', // Ensure the container is responsive
        }}
      />
    </div>

  );
};

export default Dino;
