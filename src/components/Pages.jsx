import React from "react";
import Home from '../pages/Home'
import Discord from "../pages/Discord";
import { Route, Routes } from "react-router-dom";
import Race from "../pages/Race";
import Crash from "../pages/Crash";
import Roulette from "../pages/Roulette";
import Slots from "../pages/Slots";
import Blackjack from "../pages/Blackjack";
import Reme from "../pages/Reme";
import Limbo from "../pages/Limbo";
import Coinflip from "../pages/Coinflip";
import Towers from "../pages/Towers";
import Mines from "../pages/Mines";
import Unboxing from "../pages/Unboxing";
import Dice from "../pages/Dice";
import Keno from "../pages/Keno";
import Plinko from "../pages/Plinko";
import UnboxingList from "../pages/UnboxingList";
import RegisterPage from './RegisterPage';

const Pages = () => {
  return (
    <div>
      <Routes key={location.pathname} location={location}>
        <Route path="/" element={<Home/>} />
        <Route path="/register" element={<RegisterPage/>} />

        <Route path="/games/crash/*" element={<Crash/>} />
        <Route path="/games/roulette/*" element={<Roulette/>} />
        <Route path="/games/slots/*" element={<Slots/>} />
        <Route path="/games/blackjack/*" element={<Blackjack/>} />
        <Route path="/games/reme/*" element={<Reme/>} />
        <Route path="/games/limbo/*" element={<Limbo/>} />
        <Route path="/games/coinflip/*" element={<Coinflip/>} />
        <Route path="/games/towers/*" element={<Towers/>} />
        <Route path="/games/mines/*" element={<Mines/>} />
        <Route path="/games/unboxing/*" element={<Unboxing/>} />
        <Route path="/games/dice/*" element={<Dice/>} />
        <Route path="/games/keno/*" element={<Keno/>} />
        <Route path="/games/plinko/*" element={<Plinko/>} />
        <Route path="/games/race/*" element={<Race/>} />
        <Route path="/games/discord/*" element={<Discord/>} />
        <Route path="/games/:id" element = {<UnboxingList/>}/>
      </Routes>
    </div>
  );
};

export default Pages;
