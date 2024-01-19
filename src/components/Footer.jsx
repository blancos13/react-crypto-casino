import React from 'react'
import {PiWalletFill} from 'react-icons/pi'
import MobileNavbar from './MobileNavbar'
import MobileChat from './MobileChat'

const Footer = () => {
  return (
    <footer className='fixed flex justify-between items-center px-8 sm:hidden bottom-0 left-0 right-0 bg-[#181921] h-[75px] shadow-xl'>
       <MobileChat/>
       <PiWalletFill className='text-3xl text-grey cursor-pointer'/>
       <MobileNavbar/>
    </footer>
  )
}

export default Footer