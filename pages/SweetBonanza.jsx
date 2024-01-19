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
import Script from 'react-load-script'

const Slots = () => {
  const [socket, setSocket] = useState(null);
  const [username, setUsername] = useState('');
  const [balance, setBalance] = useState(0.00);
  const [UserID, setUserID] = useState('');

  const [level, setLevel] = useState('');
  const nrRoll_1 = getRandomInt(0, 9);
  const nrRoll_2 = getRandomInt(0, 9);
  const nrRoll_3 = getRandomInt(0, 9);
  const nrRoll_4 = getRandomInt(0, 9);
  const [currentRoll, setCurrentRoll] = useState(null);
  const [DiceResult, SetDiceResult] = useState(null);
  const iframeRef = useRef(null);

  const rollDice = roundedToFixed(parseFloat((nrRoll_1 * 1000 + nrRoll_2 * 100 + nrRoll_3 * 10 + nrRoll_4) / 100), 2);
  const scriptRef = useRef();
  const [rangeData, setRangeData] = useState(50);
  const [inputColor, setInputColor] = useState(false);
  let inputRef = useRef();
  const [betAmount, setBetAmount] = useState(1);
  const [user, setUser] = useState({
    userid: null,
    balance: null,
  });
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

         // Now you can use id and balance as needed
         // For example, log them or set them to state variables
         console.log('User ID:', id);
         console.log('User Balance:', balance);
         
         setLevel(level);
       } else {
         // Handle error
         console.error("Failed to fetch user data");
       }
     } catch (error) {
       console.error("Error fetching user data:", error);
     }
   };
   
   /*const getToken = async () => {
    const api = `https://api-prod.mortalsoft.online/api/Pt2ZnizOdmDagJNiIYbSnR3x6YM3jWPS/createSession?identifier=${UserID}&balance=${balance}`;
  
    try {
      const response = await fetch(api);
      const data = await response.json();
  
      if (data.original && data.original.token) {
        const token = data.original.token;
  
        // Use the token in another fetch
        const secondApi = `https://api-prod.mortalsoft.online/api/Pt2ZnizOdmDagJNiIYbSnR3x6YM3jWPS/createSession?identifier=${UserID}&balance=${balance}`;
        
        try {
          const secondResponse = await fetch(secondApi);
          const secondData = await secondResponse.json();
          
          // Log only the token from the second fetch data
          console.log('Token from Second Fetch:', secondData.original.token);
  
        } catch (error) {
          console.error('Error in second fetch:', error);
          // Handle errors from the second fetch here
        }
      } else {
        console.error('Token not found in the response.');
      }
    } catch (error) {
      console.error('Error:', error);
      // Handle errors from the first fetch here
    }
  };
  
  // Call the function to get the token and make the second fetch
  getToken();*/

  
  /*const getToken = async () => {
    const api = `https://api-prod.mortalsoft.online/api/Pt2ZnizOdmDagJNiIYbSnR3x6YM3jWPS/createSession?identifier=${UserID}&balance=${balance}`;
  
    try {
      const response = await fetch(api);
      const data = await response.json();
  
      if (data.original && data.original.token) {
        const token = data.original.token;
  
        // Use the token in another fetch
  
        try {
  
          // Log only the token from the second fetch data
          console.log('Token from Fetch:', data.original.token);
        } catch (error) {
          console.error('Error in second fetch:', error);
          // Handle errors from the second fetch here
        }
      } else {
        console.error('Token not found in the response.');
      }
    } catch (error) {
      console.error('Error:', error);
      // Handle errors from the first fetch here
    }
  };
  
  // Call the function initially
  getToken();*/
  
  // Set up an interval to call the function every 1000 milliseconds (1 second)
  //const intervalId = setInterval(getToken, 2000);
  
  // To stop the interval after a certain duration (e.g., 10 seconds), you can use clearTimeout
  // Uncomment the lines below if you want to stop the interval after 10 seconds
  // setTimeout(() => {
  //   clearInterval(intervalId);
  // }, 10000);
  
  
  const handleScriptLoad = () => {
    // Script has been loaded
    console.log('Script loaded successfully');
    launchGame();
  };
  useEffect(() => {
    // Cleanup: remove the script when the component unmounts
    return () => {
      if (scriptRef.current) {
        document.head.removeChild(scriptRef.current);
      }
    };
  }, []);


  let hasLaunchedGame = false;

  const launchGameWithRetry = async () => {
    if (hasLaunchedGame) {
      console.log("Game has already been launched. Skipping...");
      return;
    }
  
    if (!UserID || !balance) {
      console.log("UserID or balance is empty. Cannot launch the game.");
      return;
    }
  
    try {
      const api = `https://api-prod.mortalsoft.online/api/Pt2ZnizOdmDagJNiIYbSnR3x6YM3jWPS/createSession?identifier=${UserID}&balance=${balance}`;
      const response = await fetch(api);
      const data = await response.json();
      const tokens = data.original.token;
      console.log(tokens);
  
      const gameUrl = `https://api-prod.mortalsoft.online/play/SweetBonanza/${tokens}`;
      const iframe = document.getElementById('gameIframe');
      
      if (iframe) {
        iframe.src = gameUrl;
        hasLaunchedGame = true; // Set the flag to true after the game has been launched
      }
    } catch (error) {
      console.error('Error fetching session data:', error);
    }
  };
  
  // Call the function
  launchGameWithRetry();
      
      

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
            setUserID(id);
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
        <div className="xl:w-[68%] lg:w-[80%] w-[90%] xl:ml-[450px] lg:ml-[420px] mx-auto lg:h-[700px] h-[700px] bg-[#22242F] rounded-md">
        <iframe
  id="gameIframe"
  style={{ width: '100%', height: '100%' }}
  frameBorder="0"
  title="Game iframe"
  allowFullScreen
></iframe>

    </div>


                    
        </div>

        <div className="pt-24 xl:ml-[80px]">
          <div className="xl:w-[68%] lg:w-[80%]  w-[90%] xl:ml-[450px] lg:ml-[420px] mx-auto lg:mt-0 mt-6 lg:h-[300px] h-[600px] bg-[#1C1D27] rounded-md px-4 py-6">
            <h1 className="text-3xl text-lightgrey font-semibold font-primary">
              Slots
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
      <Script
      url="https://cdn.jsdelivr.net/gh/MortalSoft/Gameloader@main/sg.min.js"
      onLoad={handleScriptLoad}
    />
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

export default Slots;
