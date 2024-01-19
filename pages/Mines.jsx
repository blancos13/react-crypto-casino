import React,{useState, useEffect} from 'react'
import random from 'random'
import miness from '../components/Miness'
import Bombe from '../components/Bombe'
import NavbarComp from "../components/NavbarComp";
import ChatMenu from "../components/ChatMenu";
import Main from "../components/Main";
import Footer from "../components/Footer";
import { BsFileLock2Fill } from "react-icons/bs";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Card, Skeleton, Button, Checkbox } from '@nextui-org/react';

let total = [];
for (let i = 1; i < 25; i++) {
  total.push(i);
}

console.log(total);

const Mines = ({oneCliked, twoCliked, threeCliked, fourCliked, fiveCliked, sixCliked, sevenCliked
  , eightCliked, nineCliked, tenCliked, twelveCliked, thirteenCliked, fourteenCliked, fifteenCliked,
  sixteenCliked, seventeenCliked, eighteenCliked, nineteenCliked, twentyCliked, twentyOneCliked
  ,twentyTwoCliked, twentyThreeCliked, twetyFourCliked, twentyFiveCliked
}) => {

  const [numberOfMines, setNumberOfMines] = useState('1');

  const [playing, setPlaying] = useState(false)
  const [cashout, setCashout] = useState(false)
  const [lost, setLost] = useState(false)
  const [multiplier, setMultipler] = useState(0)
  const [scoreNumber, setScoreNumber]= useState(0.0000000)
  const [disableButton, setDisableButton] = useState(false)
  const POINT_REWARD = 100

  const final_points =  multiplier*POINT_REWARD

  let score;
  //const [MinesSelectedNumber, setMinesSelectedNumber] = useState([])
  // const [win, setWin] = useState({
  //   one: false,
  //   two: false,
  //   three: false,
  //   four: false,
  //   five: false,
  //   six: false,
  //   seven: false,
  //   eight: false,
  //   nine: false,
  //   teen: false,
  //   twelve: false,
  //   eleven: false,
  //   thirteen: false,
  //   fourteen: false,
  //   fifteen: false,
  //   sixteen: false,
  //   seventeen: false,
  //   eighteen: false,
  //   nineteen: false,
  //   twenty: false,
  //   twentyone: false,
  //   twentytwo: false,
  //   twentythree: false,
  //   twentyfour: false,
  //   thwentyfive: false,
  // });

  let MinesSelectedNumber = []

  const verifier = (nb)=>{
    return MinesSelectedNumber.some((number,index)=>{
        return nb === number
    })
  }


  const resetCss= ()=>{
    let boxs= document.getElementsByClassName('boxs')
    for(var i = 0; i <25; i++){
      boxs[i].style.backgroundImage= '';
    }
    setDisableButton(false)
  }
  const importingMinesNumber = () => {
    MinesSelectedNumber = [];
    let min = 1;
    let max = 25;
    
    if (numberOfMines === '1') {
      var rnbb = random.int(min, max);
      MinesSelectedNumber.push(rnbb);
      return;
    }

    for (let i = 0; i < parseInt(numberOfMines); i++) {
      let rNB = random.int(min, max);
      let doesExistInArray = verifier(rNB);
      console.log(`index ${i}`, rNB);

      if (!doesExistInArray) {
        MinesSelectedNumber.push(rNB);
      } else {
        i = i - 1;
      }
    }
    console.log('final array', MinesSelectedNumber);
  };




  const pickHandler = (e)=>{
    let n;
    let ExistInMines;
    console.log(e.target.value)
    console.log(MinesSelectedNumber)

    if(!playing){
      let button = document.getElementsByClassName('boxs')
      toast.warning('Please start game first.');

    }
    switch(e.target.value) {
     
      case "1":
          oneCliked = true
          n= 1
          ExistInMines = verifier(n)
          let oneHtml = document.getElementsByClassName("box1")
         
          if(!ExistInMines){
            oneHtml[0].style.backgroundImage = "url('https://svgur.com/i/Y86.svg ')"

            setMultipler(multiplier+2)
          }else{
            oneHtml[0].style.backgroundImage = "url('https://svgur.com/i/Y6x.svg ')" 

            setLost(true)
            setMultipler(0)
          }
      
        break;
      case "2":
          oneCliked = true
          n= 2
          ExistInMines = verifier(n)
          let twohtml = document.getElementsByClassName("box2")
         
          if(!ExistInMines){
            twohtml[0].style.backgroundImage = "url('https://svgur.com/i/Y86.svg ')"
            setMultipler(multiplier+2)
          }else{
            twohtml[0].style.backgroundImage = "url('https://svgur.com/i/Y6x.svg ')"   
            setLost(true)
            setMultipler(0)
            localStorage.setItem('score', 0);
          }
         
        break;
    case "3":
          oneCliked = true
          n= 3
          ExistInMines = verifier(n)
          let threeHtml = document.getElementsByClassName("box3")
         
          if(!ExistInMines){
            threeHtml[0].style.backgroundImage = "url('https://svgur.com/i/Y86.svg ')"
            setMultipler(multiplier+2)
          }else{
            threeHtml[0].style.backgroundImage = "url('https://svgur.com/i/Y6x.svg ')"
            setLost(true)   
            setMultipler(0)
            localStorage.setItem('score', 0);
          }
         
        break;

        case "4":
          oneCliked = true
          n= 4
          ExistInMines = verifier(n)
          let fourHtml = document.getElementsByClassName("box4")
         
          if(!ExistInMines){
            fourHtml[0].style.backgroundImage = "url('https://svgur.com/i/Y86.svg ')"
            setMultipler(multiplier+2)
          }else{
            fourHtml[0].style.backgroundImage = "url('https://svgur.com/i/Y6x.svg ')" 
            setLost(true)  
            setMultipler(0)
            localStorage.setItem('score', 0);
          }
         
        break;
        case "5":
          oneCliked = true
          n= 5
          ExistInMines = verifier(n)
          let fiveHtml = document.getElementsByClassName("box5")
         
          if(!ExistInMines){
            fiveHtml[0].style.backgroundImage = "url('https://svgur.com/i/Y86.svg ')"
            setMultipler(multiplier+2)
          }else{
            fiveHtml[0].style.backgroundImage = "url('https://svgur.com/i/Y6x.svg ')"  
            setLost(true) 
            setMultipler(0)
            localStorage.setItem('score', 0);
          }
         
        break;
        case "6":
          oneCliked = true
          n= 6
          ExistInMines = verifier(n)
          let sixHtml = document.getElementsByClassName("box6")
         
          if(!ExistInMines){
            sixHtml[0].style.backgroundImage = "url('https://svgur.com/i/Y86.svg ')"
            setMultipler(multiplier+2)
          }else{
            sixHtml[0].style.backgroundImage = "url('https://svgur.com/i/Y6x.svg ')"  
            setLost(true) 
            setMultipler(0)
            localStorage.setItem('score', 0);

          }
         
        break;
        case "7":
          oneCliked = true
          n= 7
          ExistInMines = verifier(n)
          let sevenHtml = document.getElementsByClassName("box7")
         
          if(!ExistInMines){
            sevenHtml[0].style.backgroundImage = "url('https://svgur.com/i/Y86.svg ')"
            setMultipler(multiplier+2)
          }else{
            sevenHtml[0].style.backgroundImage = "url('https://svgur.com/i/Y6x.svg ')"  
            setLost(true) 
            setMultipler(0)
            localStorage.setItem('score', 0);
          }
         
        break;
        case "8":
          oneCliked = true
          n= 8
          ExistInMines = verifier(n)
          let eightHtml = document.getElementsByClassName("box8")
         
          if(!ExistInMines){
            eightHtml[0].style.backgroundImage = "url('https://svgur.com/i/Y86.svg ')"
            setMultipler(multiplier+2)
          }else{
            eightHtml[0].style.backgroundImage = "url('https://svgur.com/i/Y6x.svg ')"   
               setLost(true)
               setMultipler(0)
               localStorage.setItem('score', 0);
          }
         
        break;
        case "9":
          oneCliked = true
          n= 9
          ExistInMines = verifier(n)
          let nineHtml = document.getElementsByClassName("box9")
         
          if(!ExistInMines){
            nineHtml[0].style.backgroundImage = "url('https://svgur.com/i/Y86.svg ')"
            setMultipler(multiplier+2)
          }else{
            nineHtml[0].style.backgroundImage = "url('https://svgur.com/i/Y6x.svg ')"   
               setLost(true)
               setMultipler(0)
               localStorage.setItem('score', 0);
          }
         
        break;
        case "10":
          oneCliked = true
          n= 10
          ExistInMines = verifier(n)
          let teenHtml = document.getElementsByClassName("box10")
         
          if(!ExistInMines){
            teenHtml[0].style.backgroundImage = "url('https://svgur.com/i/Y86.svg ')"
            setMultipler(multiplier+2)
          }else{
            teenHtml[0].style.backgroundImage = "url('https://svgur.com/i/Y6x.svg ')"  
            setLost(true) 
            setMultipler(0)
            localStorage.setItem('score', 0);
          }
         
        break;
        case "11":
          oneCliked = true
          n= 11
          ExistInMines = verifier(n)
          let elevenHtml = document.getElementsByClassName("box11")
         
          if(!ExistInMines){
            elevenHtml[0].style.backgroundImage = "url('https://svgur.com/i/Y86.svg ')"
            setMultipler(multiplier+2)
          }else{
            elevenHtml[0].style.backgroundImage = "url('https://svgur.com/i/Y6x.svg ')"  
            setMultipler(0)
            localStorage.setItem('score', 0); 
            setLost(true)
          }
         
        break;
        case "12":
          oneCliked = true
          n= 12
          ExistInMines = verifier(n)
          let twelveHtml = document.getElementsByClassName("box12")
         
          if(!ExistInMines){
            twelveHtml[0].style.backgroundImage = "url('https://svgur.com/i/Y86.svg ')"
            setMultipler(multiplier+2)
          }else{
            twelveHtml[0].style.backgroundImage = "url('https://svgur.com/i/Y6x.svg ')" 
            setLost(true)  
            setMultipler(0)
            localStorage.setItem('score', 0); 
          }
         
        break;
        case "13":
          oneCliked = true
          n= 13
          ExistInMines = verifier(n)
          let thirteenHtml = document.getElementsByClassName("box13")
         
          if(!ExistInMines){
            thirteenHtml[0].style.backgroundImage = "url('https://svgur.com/i/Y86.svg ')"
            setMultipler(multiplier+2)
          }else{
            thirteenHtml[0].style.backgroundImage = "url('https://svgur.com/i/Y6x.svg ')" 
            setLost(true)  
            setMultipler(0)
            localStorage.setItem('score', 0); 
          }
         
        break;
        case "14":
          oneCliked = true
          n= 14
          ExistInMines = verifier(n)
          let fourteenHtml = document.getElementsByClassName("box14")
         
          if(!ExistInMines){
            fourteenHtml[0].style.backgroundImage = "url('https://svgur.com/i/Y86.svg ')"
            setMultipler(multiplier+2)
          }else{
            fourteenHtml[0].style.backgroundImage = "url('https://svgur.com/i/Y6x.svg ')"  
            setLost(true) 
            setMultipler(0)
            localStorage.setItem('score', 0); 
          }
         
        break;
        case "15":
          oneCliked = true
          n= 15
          ExistInMines = verifier(n)
          let fifteen = document.getElementsByClassName("box15")
         
          if(!ExistInMines){
            fifteen[0].style.backgroundImage = "url('https://svgur.com/i/Y86.svg ')"
            setMultipler(multiplier+2)
          }else{
            fifteen[0].style.backgroundImage = "url('https://svgur.com/i/Y6x.svg ')"  
            setLost(true) 
            setMultipler(0)
            localStorage.setItem('score', 0); 
          }
         
        break;
        case "16":
          oneCliked = true
          n= 16
          ExistInMines = verifier(n)
          let sixteenHtml = document.getElementsByClassName("box16")
         
          if(!ExistInMines){
            sixteenHtml[0].style.backgroundImage = "url('https://svgur.com/i/Y86.svg ')"
            setMultipler(multiplier+2)
          }else{
            sixteenHtml[0].style.backgroundImage = "url('https://svgur.com/i/Y6x.svg ')" 
            setLost(true)  

          }
         
        break;
        case "17":
          oneCliked = true
          n= 17
          ExistInMines = verifier(n)
          let sevenTeenHtml = document.getElementsByClassName("box17")
         
          if(!ExistInMines){
            sevenTeenHtml[0].style.backgroundImage = "url('https://svgur.com/i/Y86.svg ')"
            setMultipler(multiplier+2)
          }else{
            sevenTeenHtml[0].style.backgroundImage = "url('https://svgur.com/i/Y6x.svg ')" 
            setLost(true)  
          }
         
        break;
        case "18":
          oneCliked = true
          n= 18
          ExistInMines = verifier(n)
          let eighteen = document.getElementsByClassName("box18")
         
          if(!ExistInMines){
            eighteen[0].style.backgroundImage = "url('https://svgur.com/i/Y86.svg ')"
            setMultipler(multiplier+2)
          }else{
            eighteen[0].style.backgroundImage = "url('https://svgur.com/i/Y6x.svg ')" 
            setLost(true)  
          }
         
        break;
        case "19":
          oneCliked = true
          n= 19
          ExistInMines = verifier(n)
          let nineteenHtml = document.getElementsByClassName("box19")
         
          if(!ExistInMines){
            nineteenHtml[0].style.backgroundImage = "url('https://svgur.com/i/Y86.svg ')"
            setMultipler(multiplier+2)
          }else{
            nineteenHtml[0].style.backgroundImage = "url('https://svgur.com/i/Y6x.svg ')" 
            setLost(true)  
          }
         
        break;
        case "20":
          oneCliked = true
          n= 20
          ExistInMines = verifier(n)
          let twentyHtml = document.getElementsByClassName("box20")
         
          if(!ExistInMines){
            twentyHtml[0].style.backgroundImage = "url('https://svgur.com/i/Y86.svg ')"
            setMultipler(multiplier+2)
          }else{
            twentyHtml[0].style.backgroundImage = "url('https://svgur.com/i/Y6x.svg ')"   
            setLost(true)
          }
         
        break;
        case "21":
          oneCliked = true
          n= 21
          ExistInMines = verifier(n)
          let twentyone = document.getElementsByClassName("box21")
         
          if(!ExistInMines){
            twentyone[0].style.backgroundImage = "url('https://svgur.com/i/Y86.svg ')"
            setMultipler(multiplier+2)
          }else{
            twentyone[0].style.backgroundImage = "url('https://svgur.com/i/Y6x.svg ')"   
            setLost(true)
          }
         
        break;
        case "22":
          oneCliked = true
          n= 22
          ExistInMines = verifier(n)
          let twentyTwoHtml = document.getElementsByClassName("box22")
         
          if(!ExistInMines){
            twentyTwoHtml[0].style.backgroundImage = "url('https://svgur.com/i/Y86.svg ')"
            setMultipler(multiplier+2)
          }else{
            twentyTwoHtml[0].style.backgroundImage = "url('https://svgur.com/i/Y6x.svg ')" 
            setLost(true)  
          }
         
        break;
        case "23":
          oneCliked = true
          n= 23
          ExistInMines = verifier(n)
          let twentyThree = document.getElementsByClassName("box23")
         
          if(!ExistInMines){
            twentyThree[0].style.backgroundImage = "url('https://svgur.com/i/Y86.svg ')"
            setMultipler(multiplier+2)
          }else{
            twentyThree[0].style.backgroundImage = "url('https://svgur.com/i/Y6x.svg ')" 
            setLost(true)  
          }
         
        break;
        case "24":
          oneCliked = true
          n= 24
          ExistInMines = verifier(n)
          let twentfour = document.getElementsByClassName("box24")
         
          if(!ExistInMines){
            twentfour[0].style.backgroundImage = "url('https://svgur.com/i/Y86.svg ')"
            setMultipler(multiplier+2)
          }else{
            twentfour[0].style.backgroundImage = "url('https://svgur.com/i/Y6x.svg ')"   
            setLost(true)
          }
         
        break;
        case "25":
          oneCliked = true
          n= 25
          ExistInMines = verifier(n)
          let twentyFive = document.getElementsByClassName("box25")
         
          if(!ExistInMines){
            twentyFive[0].style.backgroundImage = "url('https://svgur.com/i/Y86.svg ')"
            setMultipler(multiplier+2)
          }else{
            twentyFive[0].style.backgroundImage = "url('https://svgur.com/i/Y6x.svg ')" 
            setLost(true)  
          }
         
        break;


      default:
        // code block
    }
      
    }
   //mine Number selector
   const mineNumberHandler = (e)=>{
    setNumberOfMines(e.target.value)
   } 



   useEffect(()=>{
    

    importingMinesNumber();
   },[numberOfMines, playing,MinesSelectedNumber])

   useEffect(()=>{
    showScore()

   },[lost])

   const [scoreBoard, setScoreBoard] = useState('0')
   useEffect(()=>{
     score = localStorage.getItem('score');
     setScoreBoard(score)

   },[pickHandler, playing, lost])

   const showScore =()=>{
     // score lost!
     if(lost){
      let scoreHtml = document.getElementsByClassName('finish-score')
      scoreHtml[0].style.display = "block"
      let button = document.getElementsByClassName('boxs')
      setDisableButton(true)
      setMultipler(0)
      localStorage.setItem('score', 0); 
     
     }
   }



   const StartCashout =()=>{
   
    setPlaying(!playing)
    

    if(!playing){
      setLost(false)

      resetCss()
      let scoreHtml = document.getElementsByClassName('finish-score')
      scoreHtml[0].style.display = "none"
    
    }

    if(playing){
      let scoreHtml = document.getElementsByClassName('finish-score')
      scoreHtml[0].style.display = "none"

      localStorage.setItem('score',final_points);
     console.log(final_points);
     // toast.warning(final_points);
      resetCss()

    }
    // if(!playing){
    //        //show score
    //    let scoreHtml = document.getElementsByClassName('finish-score')
    //    scoreHtml[0].style.display = "block"
    // }
   }


  return (
    <>

    <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"
style={{
  fontSize: '14px', // Adjust the font size
  padding: '10px', // Adjust the padding
  maxWidth: '100%', // Ensure the container is responsive
}}
/>

    <div>
      <NavbarComp />
      <ChatMenu />
      <div>
        <div className="pt-24 xl:ml-[80px]">
          <div className="xl:w-[68%] lg:w-[60%] w-[90%] xl:ml-[405px] lg:ml-[425px] mx-auto px lg:h-[600px] h-[700px] bg-[#22242F] rounded-md">
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
                    value="0.00"
                      type="number"
                      className="w-full h-10 bg-[#2F3241] focus:shadow-lg outline-none pl-10 text-white mt-2 font-primary font-semibold tracking-wider"
                    />
                    <div className="flex gap-x-2 absolute right-3 top-3 ">
                      <button className="text-gray-400 font-semibold font-primary hover:bg-gray-700 p-1">
                        1/2
                      </button>
                      <button className="text-gray-400 font-semibold font-primary hover:bg-gray-700 p-1">
                        2x
                      </button>
                    </div>
                  </div>
                </div>

                  <div className="mineNumberSetting">
                  <p className="text-white font-semibold ">
                    Mines Amount
                  </p>
              <select name="minesNumber" id="mineNumber" onChange={(e)=>mineNumberHandler(e)}>

                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
              </select>
              </div>

    <Button
      className="betbutton bg-blue-600 w-full h-10 text-white flex justify-center items-center border-2 mt-4 border-blue-800 hover:bg-blue-500 transition duration-200 font-primary font-semibold xl:text-base text-sm z-0 cursor-pointer relative"
      onClick={() => StartCashout()}
    >
      {lost ? 'Play' : playing ? 'CASHOUT' : 'Place Bet'}
    </Button>




              </div>
              <div className="border-t border-b  border-gray-700 lg:w-3/4 w-[95%] lg:ml-0 mx-auto lg:h-[500px] h-[400px] z-0 flex gap-y-4 justify-center gap-x-[250px]">
                <div className="bg-[#22242F] lg:h-[470px] h-[380px] lg:w-[300px] w-[300px] p-2 lg:mt-3 mt-2 rounded-md grid grid-cols-5 justify-items-center place-items-center xl:gap-x-[88px] lg:gap-x-12 gap-x-12">
                    <div className="container">
                    <button  className="boxs bg-[#2F3241] xl:w-[80px] w-[50px] xl:h-[80px] h-[50px] rounded-md flex items-center justify-center text-lightgrey font-primary font-semibold hover:bg-gray-700 transition duration-500 border-t-2 border-gray-600 border-b-2 cursor-pointer boxImage box1" onClick={(e)=>pickHandler(e)} value="1" disabled={disableButton}> </button>
      <button  className="boxs bg-[#2F3241] xl:w-[80px] w-[50px] xl:h-[80px] h-[50px] rounded-md flex items-center justify-center text-lightgrey font-primary font-semibold hover:bg-gray-700 transition duration-200 border-t-2 border-gray-600 border-b-2 cursor-pointer boxImage box2" onClick={(e)=>pickHandler(e)} value="2" disabled={disableButton}> </button>
      <button  className="boxs bg-[#2F3241] xl:w-[80px] w-[50px] xl:h-[80px] h-[50px] rounded-md flex items-center justify-center text-lightgrey font-primary font-semibold hover:bg-gray-700 transition duration-200 border-t-2 border-gray-600 border-b-2 cursor-pointer boxImage box3" onClick={(e)=>pickHandler(e)} value="3" disabled={disableButton}> </button>
      <button  className="boxs bg-[#2F3241] xl:w-[80px] w-[50px] xl:h-[80px] h-[50px] rounded-md flex items-center justify-center text-lightgrey font-primary font-semibold hover:bg-gray-700 transition duration-200 border-t-2 border-gray-600 border-b-2 cursor-pointer boxImage box4" onClick={(e)=>pickHandler(e)} value="4" disabled={disableButton}> </button>
      <button  className="boxs bg-[#2F3241] xl:w-[80px] w-[50px] xl:h-[80px] h-[50px] rounded-md flex items-center justify-center text-lightgrey font-primary font-semibold hover:bg-gray-700 transition duration-200 border-t-2 border-gray-600 border-b-2 cursor-pointer boxImage box5" onClick={(e)=>pickHandler(e)} value="5" disabled={disableButton}> </button>
      <button  className="boxs bg-[#2F3241] xl:w-[80px] w-[50px] xl:h-[80px] h-[50px] rounded-md flex items-center justify-center text-lightgrey font-primary font-semibold hover:bg-gray-700 transition duration-200 border-t-2 border-gray-600 border-b-2 cursor-pointer boxImage box6" onClick={(e)=>pickHandler(e)} value="6" disabled={disableButton}> </button>
      <button  className="boxs bg-[#2F3241] xl:w-[80px] w-[50px] xl:h-[80px] h-[50px] rounded-md flex items-center justify-center text-lightgrey font-primary font-semibold hover:bg-gray-700 transition duration-200 border-t-2 border-gray-600 border-b-2 cursor-pointer boxImage box7" onClick={(e)=>pickHandler(e)} value="7" disabled={disableButton}> </button>
      <button  className="boxs bg-[#2F3241] xl:w-[80px] w-[50px] xl:h-[80px] h-[50px] rounded-md flex items-center justify-center text-lightgrey font-primary font-semibold hover:bg-gray-700 transition duration-200 border-t-2 border-gray-600 border-b-2 cursor-pointer boxImage box8" onClick={(e)=>pickHandler(e)} value="8" disabled={disableButton}> </button>
      <button  className="boxs bg-[#2F3241] xl:w-[80px] w-[50px] xl:h-[80px] h-[50px] rounded-md flex items-center justify-center text-lightgrey font-primary font-semibold hover:bg-gray-700 transition duration-200 border-t-2 border-gray-600 border-b-2 cursor-pointer boxImage box9" onClick={(e)=>pickHandler(e)} value="9" disabled={disableButton}> </button>
      <button  className="boxs bg-[#2F3241] xl:w-[80px] w-[50px] xl:h-[80px] h-[50px] rounded-md flex items-center justify-center text-lightgrey font-primary font-semibold hover:bg-gray-700 transition duration-200 border-t-2 border-gray-600 border-b-2 cursor-pointer boxImage box10" onClick={(e)=>pickHandler(e)} value="10" disabled={disableButton}> </button>
      <button  className="boxs bg-[#2F3241] xl:w-[80px] w-[50px] xl:h-[80px] h-[50px] rounded-md flex items-center justify-center text-lightgrey font-primary font-semibold hover:bg-gray-700 transition duration-200 border-t-2 border-gray-600 border-b-2 cursor-pointer boxImage box11" onClick={(e)=>pickHandler(e)} value="11" disabled={disableButton}> </button>
      <button  className="boxs bg-[#2F3241] xl:w-[80px] w-[50px] xl:h-[80px] h-[50px] rounded-md flex items-center justify-center text-lightgrey font-primary font-semibold hover:bg-gray-700 transition duration-200 border-t-2 border-gray-600 border-b-2 cursor-pointer boxImage box12" onClick={(e)=>pickHandler(e)} value="12" disabled={disableButton}> </button>
      <button  className="boxs bg-[#2F3241] xl:w-[80px] w-[50px] xl:h-[80px] h-[50px] rounded-md flex items-center justify-center text-lightgrey font-primary font-semibold hover:bg-gray-700 transition duration-200 border-t-2 border-gray-600 border-b-2 cursor-pointer boxImage box13" onClick={(e)=>pickHandler(e)} value="13" disabled={disableButton}> </button>
      <button  className="boxs bg-[#2F3241] xl:w-[80px] w-[50px] xl:h-[80px] h-[50px] rounded-md flex items-center justify-center text-lightgrey font-primary font-semibold hover:bg-gray-700 transition duration-200 border-t-2 border-gray-600 border-b-2 cursor-pointer boxImage box14" onClick={(e)=>pickHandler(e)} value="14" disabled={disableButton}> </button>
      <button  className="boxs bg-[#2F3241] xl:w-[80px] w-[50px] xl:h-[80px] h-[50px] rounded-md flex items-center justify-center text-lightgrey font-primary font-semibold hover:bg-gray-700 transition duration-200 border-t-2 border-gray-600 border-b-2 cursor-pointer boxImage box15" onClick={(e)=>pickHandler(e)} value="15" disabled={disableButton}> </button>
      <button  className="boxs bg-[#2F3241] xl:w-[80px] w-[50px] xl:h-[80px] h-[50px] rounded-md flex items-center justify-center text-lightgrey font-primary font-semibold hover:bg-gray-700 transition duration-200 border-t-2 border-gray-600 border-b-2 cursor-pointer boxImage box16" onClick={(e)=>pickHandler(e)} value="16" disabled={disableButton}> </button>
      <button  className="boxs bg-[#2F3241] xl:w-[80px] w-[50px] xl:h-[80px] h-[50px] rounded-md flex items-center justify-center text-lightgrey font-primary font-semibold hover:bg-gray-700 transition duration-200 border-t-2 border-gray-600 border-b-2 cursor-pointer boxImage box17" onClick={(e)=>pickHandler(e)} value="17" disabled={disableButton}> </button>
      <button  className="boxs bg-[#2F3241] xl:w-[80px] w-[50px] xl:h-[80px] h-[50px] rounded-md flex items-center justify-center text-lightgrey font-primary font-semibold hover:bg-gray-700 transition duration-200 border-t-2 border-gray-600 border-b-2 cursor-pointer boxImage box18" onClick={(e)=>pickHandler(e)} value="18" disabled={disableButton}> </button>
      <button  className="boxs bg-[#2F3241] xl:w-[80px] w-[50px] xl:h-[80px] h-[50px] rounded-md flex items-center justify-center text-lightgrey font-primary font-semibold hover:bg-gray-700 transition duration-200 border-t-2 border-gray-600 border-b-2 cursor-pointer boxImage box19" onClick={(e)=>pickHandler(e)} value="19" disabled={disableButton}> </button>
      <button  className="boxs bg-[#2F3241] xl:w-[80px] w-[50px] xl:h-[80px] h-[50px] rounded-md flex items-center justify-center text-lightgrey font-primary font-semibold hover:bg-gray-700 transition duration-200 border-t-2 border-gray-600 border-b-2 cursor-pointer boxImage box20" onClick={(e)=>pickHandler(e)} value="20" disabled={disableButton}> </button>
      <button  className="boxs bg-[#2F3241] xl:w-[80px] w-[50px] xl:h-[80px] h-[50px] rounded-md flex items-center justify-center text-lightgrey font-primary font-semibold hover:bg-gray-700 transition duration-200 border-t-2 border-gray-600 border-b-2 cursor-pointer boxImage box21" onClick={(e)=>pickHandler(e)} value="21" disabled={disableButton}> </button>
      <button  className="boxs bg-[#2F3241] xl:w-[80px] w-[50px] xl:h-[80px] h-[50px] rounded-md flex items-center justify-center text-lightgrey font-primary font-semibold hover:bg-gray-700 transition duration-200 border-t-2 border-gray-600 border-b-2 cursor-pointer boxImage box22" onClick={(e)=>pickHandler(e)} value="22" disabled={disableButton}> </button>
      <button  className="boxs bg-[#2F3241] xl:w-[80px] w-[50px] xl:h-[80px] h-[50px] rounded-md flex items-center justify-center text-lightgrey font-primary font-semibold hover:bg-gray-700 transition duration-200 border-t-2 border-gray-600 border-b-2 cursor-pointer boxImage box23" onClick={(e)=>pickHandler(e)} value="23" disabled={disableButton}> </button>
      <button  className="boxs bg-[#2F3241] xl:w-[80px] w-[50px] xl:h-[80px] h-[50px] rounded-md flex items-center justify-center text-lightgrey font-primary font-semibold hover:bg-gray-700 transition duration-200 border-t-2 border-gray-600 border-b-2 cursor-pointer boxImage box24" onClick={(e)=>pickHandler(e)} value="24" disabled={disableButton}> </button>
      <button  className="boxs bg-[#2F3241] xl:w-[80px] w-[50px] xl:h-[80px] h-[50px] rounded-md flex items-center justify-center text-lightgrey font-primary font-semibold hover:bg-gray-700 transition duration-200 border-t-2 border-gray-600 border-b-2 cursor-pointer boxImage box25" onClick={(e)=>pickHandler(e)} value="25" disabled={disableButton}> </button>
        <button className="finish-score">
            <div className="finish-score center">
                <span> {multiplier}X</span>
                <p>{scoreNumber}</p>
            </div>
            </button>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-24 xl:ml-[45px]">
          <div className="xl:w-[65%] lg:w-[60%] w-[90%] xl:ml-[450px] lg:ml-[430px] mx-auto lg:mt-0 mt-6 lg:h-[300px] h-[600px] bg-[#1C1D27] rounded-md px-4 py-6">
            <h1 className="text-3xl text-lightgrey font-semibold font-primary">
              Mines
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
                In this action-packed game, you'll be going up against the casino.
                Make sure to avoid the mines at all costs, as they will make it very difficult for you to reach the maximum win.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
    </>

  );
};

Mines.defaultProps = {
  oneCliked: false,
  twoCliked: false,
  threeCliked: false,
  fourCliked: false,
  fiveCliked: false,
  sixCliked: false,
  sevenCliked: false,
  eightCliked: false,
  nineCliked: false,
  tenCliked: false,
  elevenCliked: false,
  twelveCliked: false,
  thirteenCliked: false,
  fourteenCliked: false,
  fifteenCliked: false,
  sixteenCliked: false,
  seventeenCliked: false,
  eighteenCliked: false,
  nineteenCliked: false,
  twentyCliked: false,
  twentyOneCliked: false,
  twentyTwoCliked: false,
  twentyThreeCliked: false,
  twetyFourCliked: false,
  twentyFiveCliked: false,
  }
  
export default Mines;
