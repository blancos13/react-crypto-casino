import React from 'react'
import NavbarComp from '../components/NavbarComp'
import ChatMenu from '../components/ChatMenu'
import Footer from '../components/Footer'
import Main from '../components/Main'
import MainPart from '../components/MainPart'
import OverView from "../components/OverView";
import GameList from "../components/GameList";

const Home = () => {
  return (
    <div>
        <NavbarComp/>
        <ChatMenu/>
        <Main/>
        <MainPart/> 
        <Footer/>

        <OverView/>

    </div>
  )
}

export default Home