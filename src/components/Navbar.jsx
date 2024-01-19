import React, { Fragment, useEffect, useState } from "react";
import LargeLogo from "../assets/img/LargeLogo.png";
import SmallLogo from "../assets/img/SmallLogo.png";
import { GiPerspectiveDiceSixFacesTwo, GiTrophyCup } from "react-icons/gi";
import {
  BsFillGiftFill,
  BsDiscord,
  BsFileLock2Fill,
  BsWallet,
} from "react-icons/bs";
import { IoDiamond } from "react-icons/io5";
import { TbCardsFilled } from "react-icons/tb";
import { BiChevronDown, BiSolidWallet } from "react-icons/bi";
import { MdTimer } from "react-icons/md";
import { Menu, Transition } from "@headlessui/react";
import RegisterPage from './RegisterPage';  // Adjust the path accordingly
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import userImage from "../assets/img/avatar/1.png";

//menu-images
import Crash from "../assets/img/games-menu/crash.png";
import Roulette from "../assets/img/games-menu/roulette.png";
import Slots from "../assets/img/games-menu/slots.png";
import Blackjack from "../assets/img/games-menu/blackjack.png";
import Reme from "../assets/img/games-menu/reme.png";
import Limbo from "../assets/img/games-menu/limbo.png";
import CoinFlip from "../assets/img/games-menu/coinflip.png";
import Towers from "../assets/img/games-menu/towers.png";
import Mines from "../assets/img/games-menu/mines.png";
import Unboxing from "../assets/img/games-menu/unboxing.png";
import Dice from "../assets/img/games-menu/dice.png";
import Keno from "../assets/img/games-menu/keno.png";
import Plinko from "../assets/img/games-menu/plinko.png";
import Rakeback from "../assets/img/rewards-menu/rakeback.png";
import Promo from "../assets/img/rewards-menu/promo.png";
import ResponsiveNavbar from "./ResponsiveNavbar";
import { Link } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";

const classNames = (...classes) => {
  return classes.filter(Boolean).join(" ");
};


const Navbar = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [showModal, setShowModal] = useState(false);
  const [showSign, setShowSign] = useState(false);
  const [showSignOk, setShowSignOk] = useState(false);
  const [wallet, setWallet] = useState(false);
  const [loggedInUsername, setLoggedInUsername] = useState("asdsasdasdas");

  // Function to set the logged-in username
  const onChange = () => {};

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Empty dependency array to run effect only once on mount

  // Rest of your Navbar component...

  // RegisterPage component
    // Rest of the RegisterPage component...
  

  // Window genişliğine göre logo değişikliği yapın

  return (
    <header className="w-full h-[75px] px-6 bg-primary shadow-lg flex items-center justify-between fixed z-30">
      <div className="flex items-center justify-center gap-x-8">
        <div className="cursor-pointer ">
          {windowWidth < 600 ? (
            <Link to="/">
              <img src={SmallLogo} alt="Yeni Logo" />
            </Link>
          ) : (
            <Link to="/">
              <img src={LargeLogo} alt="Yeni Logo" />
            </Link>
          )}
        </div>

        <nav className="hidden md:flex">
          <ul className="flex justify-center items-center xl:gap-x-4 lg:gap-x-6 md:gap-x-4">
            <Menu as="div" className="relative inline-block text-left">
              <div className="flex items-center justify-center gap-x-2 text-grey hover:text-lightgrey transition duration-200">
                <GiPerspectiveDiceSixFacesTwo className="text-2xl" />
                <Menu.Button className="font-semibold flex items-center">
                  <a href="#" className="hidden xl:block">
                    GAMES
                  </a>
                  <BiChevronDown className="h-5 w-5" aria-hidden="true" />
                </Menu.Button>
              </div>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="fixed right-0 left-0 z-10 mt-6 w-[100vw]  rounded-md bg-primary shadow-lg ring-1 ring-primary ring-opacity-5 focus:outline-none flex items-center flex-wrap h-[350px]">
                  <div className="py-1 px-6">
                    <Menu.Item as={Link} name="crash" to="/games/crash/*">
                      {({ active }) => (
                        <div className="hover:opacity-80 cursor-pointer transition-all duration-200">
                          <img
                            src={Crash}
                            alt=""
                            className="rounded-xl w-[225px]"
                          />
                          <a
                            to="/crash/"
                            className={classNames(
                              active ? "text-lightgrey" : "text-grey",
                              "block px-4 py-2 text-lg font-semibold text-center"
                            )}
                          >
                            CRASH
                          </a>
                        </div>
                      )}
                    </Menu.Item>
                  </div>
                  <div className="py-1 px-6">
                    <Menu.Item as={Link} name="roulette" to="/games/roulette/*">
                      {({ active }) => (
                        <div className="hover:opacity-80 cursor-pointer transition-all duration-200">
                          <img
                            src={Roulette}
                            alt=""
                            className="rounded-xl w-[225px]"
                          />
                          <a
                            href="#"
                            className={classNames(
                              active ? "text-lightgrey" : "text-grey",
                              "block px-4 py-2 text-lg font-semibold text-center"
                            )}
                          >
                            ROULETTE
                          </a>
                        </div>
                      )}
                    </Menu.Item>
                  </div>
                  <div className="py-1 px-6">
                    <Menu.Item as={Link} name="slots" to="/games/slots/*">
                      {({ active }) => (
                        <div className="hover:opacity-80 cursor-pointer transition-all duration-200">
                          <img
                            src={Slots}
                            alt=""
                            className="rounded-xl w-[225px]"
                          />
                          <a
                            href="#"
                            className={classNames(
                              active ? "text-lightgrey" : "text-grey",
                              "block px-4 py-2 text-lg font-semibold text-center"
                            )}
                          >
                            SLOTS
                          </a>
                        </div>
                      )}
                    </Menu.Item>
                  </div>
                  <div className="py-1 px-6">
                    <Menu.Item
                      as={Link}
                      name="blackjack"
                      to="/games/blackjack/*"
                    >
                      {({ active }) => (
                        <div className="hover:opacity-80 cursor-pointer transition-all duration-200">
                          <img
                            src={Blackjack}
                            alt=""
                            className="rounded-xl w-[225px]"
                          />
                          <a
                            href="#"
                            className={classNames(
                              active ? "text-lightgrey" : "text-grey",
                              "block px-4 py-2 text-lg font-semibold text-center"
                            )}
                          >
                            BLACKJACK
                          </a>
                        </div>
                      )}
                    </Menu.Item>
                  </div>
                  <div className="py-1 px-6">
                    <Menu.Item as={Link} name="reme" to="/games/reme/*">
                      {({ active }) => (
                        <div className="hover:opacity-80 cursor-pointer transition-all duration-200">
                          <img
                            src={Reme}
                            alt=""
                            className="rounded-xl w-[225px]"
                          />
                          <a
                            href="#"
                            className={classNames(
                              active ? "text-lightgrey" : "text-grey",
                              "block px-4 py-2 text-lg font-semibold text-center"
                            )}
                          >
                            REME
                          </a>
                        </div>
                      )}
                    </Menu.Item>
                  </div>
                  <div className="py-1 px-6">
                    <Menu.Item as={Link} name="limbo" to="/games/limbo/*">
                      {({ active }) => (
                        <div className="hover:opacity-80 cursor-pointer transition-all duration-200">
                          <img
                            src={Limbo}
                            alt=""
                            className="rounded-xl w-[225px]"
                          />
                          <a
                            href="#"
                            className={classNames(
                              active ? "text-lightgrey" : "text-grey",
                              "block px-4 py-2 text-lg font-semibold text-center"
                            )}
                          >
                            LIMBO
                          </a>
                        </div>
                      )}
                    </Menu.Item>
                  </div>
                  <div className="py-1 px-6">
                    <Menu.Item as={Link} name="coinflip" to="/games/coinflip/*">
                      {({ active }) => (
                        <div className="hover:opacity-80 cursor-pointer transition-all duration-200">
                          <img
                            src={CoinFlip}
                            alt=""
                            className="rounded-xl w-[225px]"
                          />
                          <a
                            href="#"
                            className={classNames(
                              active ? "text-lightgrey" : "text-grey",
                              "block px-4 py-2 text-lg font-semibold text-center"
                            )}
                          >
                            COINFLIP
                          </a>
                        </div>
                      )}
                    </Menu.Item>
                  </div>
                  <div className="py-1 px-6">
                    <Menu.Item as={Link} name="towers" to="/games/towers/*">
                      {({ active }) => (
                        <div className="hover:opacity-80 cursor-pointer transition-all duration-200">
                          <img
                            src={Towers}
                            alt=""
                            className="rounded-xl w-[225px]"
                          />
                          <a
                            href="#"
                            className={classNames(
                              active ? "text-lightgrey" : "text-grey",
                              "block px-4 py-2 text-lg font-semibold text-center"
                            )}
                          >
                            TOWERS
                          </a>
                        </div>
                      )}
                    </Menu.Item>
                  </div>
                  <div className="py-1 px-6">
                    <Menu.Item as={Link} name="mines" to="/games/mines/*">
                      {({ active }) => (
                        <div className="hover:opacity-80 cursor-pointer transition-all duration-200">
                          <img
                            src={Mines}
                            alt=""
                            className="rounded-xl w-[225px]"
                          />
                          <a
                            href="#"
                            className={classNames(
                              active ? "text-lightgrey" : "text-grey",
                              "block px-4 py-2 text-lg font-semibold text-center"
                            )}
                          >
                            MINES
                          </a>
                        </div>
                      )}
                    </Menu.Item>
                  </div>
                  <div className="py-1 px-6">
                    <Menu.Item as={Link} name="unboxing" to="/games/unboxing/*">
                      {({ active }) => (
                        <div className="hover:opacity-80 cursor-pointer transition-all duration-200">
                          <img
                            src={Unboxing}
                            alt=""
                            className="rounded-xl w-[225px]"
                          />
                          <a
                            href="#"
                            className={classNames(
                              active ? "text-lightgrey" : "text-grey",
                              "block px-4 py-2 text-lg font-semibold text-center"
                            )}
                          >
                            UNBOXING
                          </a>
                        </div>
                      )}
                    </Menu.Item>
                  </div>
                  <div className="py-1 px-6">
                    <Menu.Item as={Link} name="dice" to="/games/dice/*">
                      {({ active }) => (
                        <div className="hover:opacity-80 cursor-pointer transition-all duration-200">
                          <img
                            src={Dice}
                            alt=""
                            className="rounded-xl w-[225px]"
                          />
                          <a
                            href="#"
                            className={classNames(
                              active ? "text-lightgrey" : "text-grey",
                              "block px-4 py-2 text-lg font-semibold text-center"
                            )}
                          >
                            DICE
                          </a>
                        </div>
                      )}
                    </Menu.Item>
                  </div>
                  <div className="py-1 px-6">
                    <Menu.Item as={Link} name="keno" to="/games/keno/*">
                      {({ active }) => (
                        <div className="hover:opacity-80 cursor-pointer transition-all duration-200">
                          <img
                            src={Keno}
                            alt=""
                            className="rounded-xl w-[225px]"
                          />
                          <a
                            href="#"
                            className={classNames(
                              active ? "text-lightgrey" : "text-grey",
                              "block px-4 py-2 text-lg font-semibold text-center"
                            )}
                          >
                            KENO
                          </a>
                        </div>
                      )}
                    </Menu.Item>
                  </div>
                  <div className="py-1 px-6">
                    <Menu.Item as={Link} name="plinko" to="/games/plinko/*">
                      {({ active }) => (
                        <div className="hover:opacity-80 cursor-pointer transition-all duration-200">
                          <img
                            src={Plinko}
                            alt=""
                            className="rounded-xl w-[225px]"
                          />
                          <a
                            href="#"
                            className={classNames(
                              active ? "text-lightgrey" : "text-grey",
                              "block px-4 py-2 text-lg font-semibold text-center"
                            )}
                          >
                            PLINKO
                          </a>
                        </div>
                      )}
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
            <Menu as="div" className="relative inline-block text-left">
              <div className="flex items-center justify-center gap-x-2 text-grey hover:text-lightgrey transition duration-200">
                <BsFillGiftFill className="text-xl" />
                <Menu.Button className="font-semibold flex items-center">
                  <a href="#" className="hidden xl:block">
                    REWARDS
                  </a>
                  <BiChevronDown className=" h-5 w-5" aria-hidden="true" />
                </Menu.Button>
              </div>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="fixed right-0 left-0 z-10 mt-6 w-[100vw]  rounded-md bg-primary shadow-lg ring-1 ring-primary ring-opacity-5 focus:outline-none flex items-center flex-wrap h-[200px]">
                  <div className="py-1 px-6">
                    <Menu.Item>
                      {({ active }) => (
                        <div className="hover:opacity-80 cursor-pointer transition-all duration-200">
                          <img
                            src={Rakeback}
                            alt=""
                            className="rounded-xl w-[225px]"
                          />
                          <a
                            href="#"
                            className={classNames(
                              active ? "text-lightgrey" : "text-grey",
                              "block px-4 py-2 text-lg font-semibold text-center"
                            )}
                          >
                            RAKEBACK
                          </a>
                        </div>
                      )}
                    </Menu.Item>
                  </div>
                  <div className="py-1 px-6">
                    <Menu.Item>
                      {({ active }) => (
                        <div className="hover:opacity-80 cursor-pointer transition-all duration-200">
                          <img
                            src={Promo}
                            alt=""
                            className="rounded-xl w-[225px]"
                          />
                          <a
                            href="#"
                            className={classNames(
                              active ? "text-lightgrey" : "text-grey",
                              "block px-4 py-2 text-lg font-semibold text-center"
                            )}
                          >
                            PROMO
                          </a>
                        </div>
                      )}
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
            <li className="flex items-center justify-center gap-x-2 text-grey hover:text-lightgrey transition duration-200">
              <TbCardsFilled className="text-2xl" />
              <a className="font-semibold hidden xl:block" href="#">
                AFFILIATES
              </a>
            </li>
            <li className="flex items-center justify-center gap-x-2 text-grey hover:text-lightgrey transition duration-200">
              <GiTrophyCup className="text-2xl" />
              <button
                className="font-semibold hidden xl:block"
                type="button"
                onClick={() => setShowModal(true)}
              >
                LEADERBOARD
              </button>
              {showModal ? (
                <div className="text-lightgrey">
                  <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                    <div className="relative my-6 mx-auto max-w-[900px]">
                      {/*content*/}
                      <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full outline-none focus:outline-none bg-[#1C1D27]">
                        {/*header*/}
                        <div className="flex items-start justify-between p-5 border-solid border-blueGray-200 rounded-t">
                          <GiTrophyCup className="text-2xl" />
                          <h3 className="text-xl font-semibold">Leaderboard</h3>
                          <button
                            className="p-1 ml-auto bg-transparent border-0 text-white opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                            onClick={() => setShowModal(false)}
                          >
                            <span className="bg-transparent opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                              ×
                            </span>
                          </button>
                        </div>
                        {/*body*/}
                        <div className="relative p-6 flex-auto">
                          <table className="max-w-[980px] w-full">
                            <thead className="flex gap-x-4 w-full">
                              <th className="w-[80px]">#</th>
                              <th className="w-[80px]">Username</th>
                              <th className="w-[80px]">Level</th>
                              <th className="w-[80px]">Wagered</th>
                              <th className="w-[80px]">Profit</th>
                              <th className="w-[80px]">Profit (ATH)</th>
                              <th className="w-[80px]">Profit (ATL)</th>
                              <th className="w-[80px]">Games Played</th>
                              <th className="w-[80px]">Games Won</th>
                            </thead>
                            <div className="w-full max-h-[400px] h-full overflow-y-auto">
                              <tbody className="flex w-full gap-x-4 mt-4">
                                <tr className="w-[80px]">1</tr>
                                <tr className="w-[80px]">Lorem</tr>
                                <tr className="w-[80px]">Lorem</tr>
                                <tr className="w-[80px]">Lorem</tr>
                                <tr className="w-[80px]">Lorem</tr>
                                <tr className="w-[80px]">Lorem</tr>
                                <tr className="w-[80px]">Lorem</tr>
                                <tr className="w-[80px]">Lorem</tr>
                                <tr className="w-[80px]">Lorem</tr>
                              </tbody>
                              <tbody className="flex gap-x-4 w-full">
                                <tr className="w-[80px]">1</tr>
                                <tr className="w-[80px]">Lorem</tr>
                                <tr className="w-[80px]">Lorem</tr>
                                <tr className="w-[80px]">Lorem</tr>
                                <tr className="w-[80px]">Lorem</tr>
                                <tr className="w-[80px]">Lorem</tr>
                                <tr className="w-[80px]">Lorem</tr>
                                <tr className="w-[80px]">Lorem</tr>
                                <tr className="w-[80px]">Lorem</tr>
                              </tbody>
                              <tbody className="flex gap-x-4 w-full">
                                <tr className="w-[80px]">1</tr>
                                <tr className="w-[80px]">Lorem</tr>
                                <tr className="w-[80px]">Lorem</tr>
                                <tr className="w-[80px]">Lorem</tr>
                                <tr className="w-[80px]">Lorem</tr>
                                <tr className="w-[80px]">Lorem</tr>
                                <tr className="w-[80px]">Lorem</tr>
                                <tr className="w-[80px]">Lorem</tr>
                                <tr className="w-[80px]">Lorem</tr>
                              </tbody>
                              <tbody className="flex gap-x-4 w-full">
                                <tr className="w-[80px]">1</tr>
                                <tr className="w-[80px]">Lorem</tr>
                                <tr className="w-[80px]">Lorem</tr>
                                <tr className="w-[80px]">Lorem</tr>
                                <tr className="w-[80px]">Lorem</tr>
                                <tr className="w-[80px]">Lorem</tr>
                                <tr className="w-[80px]">Lorem</tr>
                                <tr className="w-[80px]">Lorem</tr>
                                <tr className="w-[80px]">Lorem</tr>
                              </tbody>
                              <tbody className="flex gap-x-4 w-full">
                                <tr className="w-[80px]">1</tr>
                                <tr className="w-[80px]">Lorem</tr>
                                <tr className="w-[80px]">Lorem</tr>
                                <tr className="w-[80px]">Lorem</tr>
                                <tr className="w-[80px]">Lorem</tr>
                                <tr className="w-[80px]">Lorem</tr>
                                <tr className="w-[80px]">Lorem</tr>
                                <tr className="w-[80px]">Lorem</tr>
                                <tr className="w-[80px]">Lorem</tr>
                              </tbody>
                              <tbody className="flex gap-x-4 w-full">
                                <tr className="w-[80px]">1</tr>
                                <tr className="w-[80px]">Lorem</tr>
                                <tr className="w-[80px]">Lorem</tr>
                                <tr className="w-[80px]">Lorem</tr>
                                <tr className="w-[80px]">Lorem</tr>
                                <tr className="w-[80px]">Lorem</tr>
                                <tr className="w-[80px]">Lorem</tr>
                                <tr className="w-[80px]">Lorem</tr>
                                <tr className="w-[80px]">Lorem</tr>
                              </tbody>
                              <tbody className="flex gap-x-4 w-full">
                                <tr className="w-[80px]">1</tr>
                                <tr className="w-[80px]">Lorem</tr>
                                <tr className="w-[80px]">Lorem</tr>
                                <tr className="w-[80px]">Lorem</tr>
                                <tr className="w-[80px]">Lorem</tr>
                                <tr className="w-[80px]">Lorem</tr>
                                <tr className="w-[80px]">Lorem</tr>
                                <tr className="w-[80px]">Lorem</tr>
                                <tr className="w-[80px]">Lorem</tr>
                              </tbody>
                              <tbody className="flex gap-x-4 w-full">
                                <tr className="w-[80px]">1</tr>
                                <tr className="w-[80px]">Lorem</tr>
                                <tr className="w-[80px]">Lorem</tr>
                                <tr className="w-[80px]">Lorem</tr>
                                <tr className="w-[80px]">Lorem</tr>
                                <tr className="w-[80px]">Lorem</tr>
                                <tr className="w-[80px]">Lorem</tr>
                                <tr className="w-[80px]">Lorem</tr>
                                <tr className="w-[80px]">Lorem</tr>
                              </tbody>
                              <tbody className="flex gap-x-4 w-full">
                                <tr className="w-[80px]">1</tr>
                                <tr className="w-[80px]">Lorem</tr>
                                <tr className="w-[80px]">Lorem</tr>
                                <tr className="w-[80px]">Lorem</tr>
                                <tr className="w-[80px]">Lorem</tr>
                                <tr className="w-[80px]">Lorem</tr>
                                <tr className="w-[80px]">Lorem</tr>
                                <tr className="w-[80px]">Lorem</tr>
                                <tr className="w-[80px]">Lorem</tr>
                              </tbody>
                              <tbody className="flex gap-x-4 w-full">
                                <tr className="w-[80px]">1</tr>
                                <tr className="w-[80px]">Lorem</tr>
                                <tr className="w-[80px]">Lorem</tr>
                                <tr className="w-[80px]">Lorem</tr>
                                <tr className="w-[80px]">Lorem</tr>
                                <tr className="w-[80px]">Lorem</tr>
                                <tr className="w-[80px]">Lorem</tr>
                                <tr className="w-[80px]">Lorem</tr>
                                <tr className="w-[80px]">Lorem</tr>
                              </tbody>
                              <tbody className="flex gap-x-4 w-full">
                                <tr className="w-[80px]">1</tr>
                                <tr className="w-[80px]">Lorem</tr>
                                <tr className="w-[80px]">Lorem</tr>
                                <tr className="w-[80px]">Lorem</tr>
                                <tr className="w-[80px]">Lorem</tr>
                                <tr className="w-[80px]">Lorem</tr>
                                <tr className="w-[80px]">Lorem</tr>
                                <tr className="w-[80px]">Lorem</tr>
                                <tr className="w-[80px]">Lorem</tr>
                              </tbody>
                              <tbody className="flex gap-x-4 w-full">
                                <tr className="w-[80px]">1</tr>
                                <tr className="w-[80px]">Lorem</tr>
                                <tr className="w-[80px]">Lorem</tr>
                                <tr className="w-[80px]">Lorem</tr>
                                <tr className="w-[80px]">Lorem</tr>
                                <tr className="w-[80px]">Lorem</tr>
                                <tr className="w-[80px]">Lorem</tr>
                                <tr className="w-[80px]">Lorem</tr>
                                <tr className="w-[80px]">Lorem</tr>
                              </tbody>
                              <tbody className="flex gap-x-4 w-full">
                                <tr className="w-[80px]">1</tr>
                                <tr className="w-[80px]">Lorem</tr>
                                <tr className="w-[80px]">Lorem</tr>
                                <tr className="w-[80px]">Lorem</tr>
                                <tr className="w-[80px]">Lorem</tr>
                                <tr className="w-[80px]">Lorem</tr>
                                <tr className="w-[80px]">Lorem</tr>
                                <tr className="w-[80px]">Lorem</tr>
                                <tr className="w-[80px]">Lorem</tr>
                              </tbody>
                              <tbody className="flex gap-x-4 w-full">
                                <tr className="w-[80px]">1</tr>
                                <tr className="w-[80px]">Lorem</tr>
                                <tr className="w-[80px]">Lorem</tr>
                                <tr className="w-[80px]">Lorem</tr>
                                <tr className="w-[80px]">Lorem</tr>
                                <tr className="w-[80px]">Lorem</tr>
                                <tr className="w-[80px]">Lorem</tr>
                                <tr className="w-[80px]">Lorem</tr>
                                <tr className="w-[80px]">Lorem</tr>
                              </tbody>
                              <tbody className="flex gap-x-4 w-full">
                                <tr className="w-[80px]">1</tr>
                                <tr className="w-[80px]">Lorem</tr>
                                <tr className="w-[80px]">Lorem</tr>
                                <tr className="w-[80px]">Lorem</tr>
                                <tr className="w-[80px]">Lorem</tr>
                                <tr className="w-[80px]">Lorem</tr>
                                <tr className="w-[80px]">Lorem</tr>
                                <tr className="w-[80px]">Lorem</tr>
                                <tr className="w-[80px]">Lorem</tr>
                              </tbody>
                              <tbody className="flex gap-x-4 w-full">
                                <tr className="w-[80px]">1</tr>
                                <tr className="w-[80px]">Lorem</tr>
                                <tr className="w-[80px]">Lorem</tr>
                                <tr className="w-[80px]">Lorem</tr>
                                <tr className="w-[80px]">Lorem</tr>
                                <tr className="w-[80px]">Lorem</tr>
                                <tr className="w-[80px]">Lorem</tr>
                                <tr className="w-[80px]">Lorem</tr>
                                <tr className="w-[80px]">Lorem</tr>
                              </tbody>
                              <tbody className="flex gap-x-4 w-full">
                                <tr className="w-[80px]">1</tr>
                                <tr className="w-[80px]">Lorem</tr>
                                <tr className="w-[80px]">Lorem</tr>
                                <tr className="w-[80px]">Lorem</tr>
                                <tr className="w-[80px]">Lorem</tr>
                                <tr className="w-[80px]">Lorem</tr>
                                <tr className="w-[80px]">Lorem</tr>
                                <tr className="w-[80px]">Lorem</tr>
                                <tr className="w-[80px]">Lorem</tr>
                              </tbody>
                              <tbody className="flex gap-x-4 w-full">
                                <tr className="w-[80px]">1</tr>
                                <tr className="w-[80px]">Lorem</tr>
                                <tr className="w-[80px]">Lorem</tr>
                                <tr className="w-[80px]">Lorem</tr>
                                <tr className="w-[80px]">Lorem</tr>
                                <tr className="w-[80px]">Lorem</tr>
                                <tr className="w-[80px]">Lorem</tr>
                                <tr className="w-[80px]">Lorem</tr>
                                <tr className="w-[80px]">Lorem</tr>
                              </tbody>
                              <tbody className="flex gap-x-4 w-full">
                                <tr className="w-[80px]">1</tr>
                                <tr className="w-[80px]">Lorem</tr>
                                <tr className="w-[80px]">Lorem</tr>
                                <tr className="w-[80px]">Lorem</tr>
                                <tr className="w-[80px]">Lorem</tr>
                                <tr className="w-[80px]">Lorem</tr>
                                <tr className="w-[80px]">Lorem</tr>
                                <tr className="w-[80px]">Lorem</tr>
                                <tr className="w-[80px]">Lorem</tr>
                              </tbody>
                              <tbody className="flex gap-x-4 w-full">
                                <tr className="w-[80px]">1</tr>
                                <tr className="w-[80px]">Lorem</tr>
                                <tr className="w-[80px]">Lorem</tr>
                                <tr className="w-[80px]">Lorem</tr>
                                <tr className="w-[80px]">Lorem</tr>
                                <tr className="w-[80px]">Lorem</tr>
                                <tr className="w-[80px]">Lorem</tr>
                                <tr className="w-[80px]">Lorem</tr>
                                <tr className="w-[80px]">Lorem</tr>
                              </tbody>
                              <tbody className="flex gap-x-4 w-full">
                                <tr className="w-[80px]">1</tr>
                                <tr className="w-[80px]">Lorem</tr>
                                <tr className="w-[80px]">Lorem</tr>
                                <tr className="w-[80px]">Lorem</tr>
                                <tr className="w-[80px]">Lorem</tr>
                                <tr className="w-[80px]">Lorem</tr>
                                <tr className="w-[80px]">Lorem</tr>
                                <tr className="w-[80px]">Lorem</tr>
                                <tr className="w-[80px]">Lorem</tr>
                              </tbody>
                              <tbody className="flex gap-x-4 w-full">
                                <tr className="w-[80px]">1</tr>
                                <tr className="w-[80px]">Lorem</tr>
                                <tr className="w-[80px]">Lorem</tr>
                                <tr className="w-[80px]">Lorem</tr>
                                <tr className="w-[80px]">Lorem</tr>
                                <tr className="w-[80px]">Lorem</tr>
                                <tr className="w-[80px]">Lorem</tr>
                                <tr className="w-[80px]">Lorem</tr>
                                <tr className="w-[80px]">Lorem</tr>
                              </tbody>
                            </div>
                          </table>
                        </div>
                        {/*footer*/}
                        <div className="flex items-center justify-end p-6 border-t border-gray-600 rounded-b">
                          <button
                            className=" background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            type="button"
                            onClick={() => setShowModal(false)}
                          >
                            Close
                          </button>
                          <button
                            className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            type="button"
                            onClick={() => setShowModal(false)}
                          >
                            Save Changes
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </div>
              ) : null}
            </li>
            <li className="flex items-center justify-center gap-x-2 text-grey hover:text-lightgrey transition duration-200">
              <MdTimer className="text-2xl" />
              <Link className="font-semibold hidden xl:block" to="/race">
                RACE
              </Link>
            </li>
            <li className="flex items-center justify-center gap-x-2 text-grey hover:text-lightgrey transition duration-200">
              <BsDiscord />
              <Link to="/discord" className="font-semibold hidden xl:block">
                DISCORD
              </Link>
            </li>{" "}
          </ul>
        </nav>
      </div>

      <div className="flex items-center justify-center">
        <div className="flex items-center justify-center gap-x-4">
          <div className="flex items-center justify-center gap-x-4 bg-[#1d1f29] shadow-xl py-3 px-6 rounded-md">
            <p className="text-white font-primary">0.00</p>
            <BsFileLock2Fill className="text-white text-xl w-8 h-8" />
            <div className="bg-blue-600 w-8 h-8 text-white flex items-center justify-center rounded-lg">
              <button onClick={() => setWallet(true)}>
                <BiSolidWallet className="text-xl" />
              </button>
              {wallet ? (
                <div>
                  <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                    <div className="relative my-6 mx-auto max-w-[1000px] w-full">
                      {/*content*/}
                      <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full outline-none focus:outline-none bg-[#1C1D27]">
                        {/*header*/}
                        <div className="flex items-start justify-between p-5 border-solid border-blueGray-200 rounded-t">
                          <button
                            className="p-1 ml-auto bg-transparent border-0  float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                            onClick={() => setWallet(false)}
                          >
                            <span className="bg-transparent h-6 w-6 text-2xl block outline-none focus:outline-none text-white">
                              ×
                            </span>
                          </button>
                        </div>
                        {/*body*/}
                        <div className="relative px-6 flex-auto">
                          <div className="flex justify-start items-center gap-x-3 ml-12">
                            <BsWallet className="text-lightgrey text-2xl" />
                            <h1 className="text-2xl text-lightgrey font-primary font-semibold">
                              Wallet
                            </h1>
                          </div>
                          <div className="flex ml-12 justify-between mt-4">
                            <button className="bg-gray-600 py-2 px-6 rounded-md">
                              Deposit
                            </button>
                            <button className="bg-gray-600 py-2 px-6 rounded-md">
                              Withdraw
                            </button>
                            <button className="bg-gray-600 py-2 px-6 rounded-md">
                              Tip
                            </button>
                          </div>
                          <div className="ml-12 mt-8 text-lightgrey font-primary">
                            <h1 className="text-2xl">How to deposit?</h1>
                            <div className="mt-8">
                              <ul className="flex flex-col gap-y-3 text-lightgrey font-primary">
                                <ol>
                                  2. Wait for the loading to complete (it may
                                  take up to 30 seconds).
                                </ol>
                                <ol>
                                  3. Enter the generated world in Growtopia.
                                  (make sure that the world owner is in the
                                  world before dropping your locks).
                                </ol>
                                <ol className="flex">
                                  4. Drop the amount of{" "}
                                  <BsFileLock2Fill className="text-lg text-yellow-500" />{" "}
                                  /
                                  <BsFileLock2Fill className="text-blue-300 text-lg" />{" "}
                                  /{" "}
                                  <IoDiamond className="text-lg  text-blue-500" />{" "}
                                  you wish to deposit next to the white door.
                                </ol>
                                <ol>
                                  5. You should see your balance update on the
                                  site within a few seconds (If it did not
                                  update, message Support.)
                                </ol>
                              </ul>
                            </div>
                          </div>
                        </div>
                        {/*footer*/}
                        <div className="flex flex-col justify-start ml-12 max-w-[900px] w-full p-6 rounded-b">
                          <div className="flex flex-col justify-start font-primary">
                            <h1 className="text-xl text-lightgrey">Deposit</h1>
                            <label className="text-lg text-lightgrey mt-4">
                              GrowID
                            </label>
                            <input
                              type="number"
                              className="bg-gray-700 h-12 rounded-md mt-4"
                            />
                            <ReCAPTCHA
                              sitekey="6Ld5hH8oAAAAAA-ol_Bgdfe3_PZAmylK2BxvuVt7"
                              onChange={onChange}
                              className="mt-4"
                            />
                            <button className="font-primary bg-lime-600 h-12 mt-4 rounded-md">
                              Start Deposit
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </div>
              ) : null}
            </div>
          </div>
          
<div className="flex items-center justify-center gap-x-4">
          <button className="text-white" onClick={() => setShowSignOk(true)}>Sign In</button>
          {showSignOk ? (
            <div>
              <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                <div className="relative my-6 mx-auto max-w-[900px]">
                  {/*content*/}
                  <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full outline-none focus:outline-none bg-[#1C1D27]">
                    {/*header*/}
                    <div className="flex items-start justify-between p-5 border-solid border-blueGray-200 rounded-t">
                      <button
                        className="p-1 ml-auto bg-transparent border-0  float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                        onClick={() => setShowSignOk(false)}
                      >
                        <span className="bg-transparent h-6 w-6 text-2xl block outline-none focus:outline-none text-white">
                          ×
                        </span>
                      </button>
                    </div>
                    {/*body*/}
                    <div className="relative px-6 flex-auto">
                      <h1 className="ml-12 text-2xl text-lightgrey font-primary font-semibold">
                        Sign In
                      </h1>
                      <form className="flex flex-col justify-center items-center w-[400px] mt-4">
                        <div className="w-[75%] flex flex-col gap-y-4">
                          <label className="text-lightgrey text-lg font-semibold">
                            Username
                          </label>
                          <input
                            type="text"
                            className="bg-gray-600 h-8 rounded-md"
                          />
                        </div>
                        <div className="w-[75%] flex flex-col gap-y-4">
                          <label className="text-lightgrey text-lg font-semibold">
                            Password
                          </label>
                          <input
                            type="password"
                            className="bg-gray-600 h-8 rounded-md"
                          />
                        </div>
                        <ReCAPTCHA
                          sitekey="6Ld5hH8oAAAAAA-ol_Bgdfe3_PZAmylK2BxvuVt7"
                          onChange={onChange}
                          className="mt-4"
                        />
                        ,
                      </form>
                    </div>
                    {/*footer*/}
                    <div className="flex flex-col items-center justify-end p-6 border-t border-gray-600 rounded-b w-full">
                      <button
                        className="bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow w-full hover:shadow-lg outline-none focus:outline-none  mb-1 ease-linear transition-all duration-150"
                        type="button"
                      >
                        Sign In
                      </button>
                      <button
                        className="text-white font-semibold uppercase text-sm px-6 py-3 rounded shadow w-full hover:shadow-lg outline-none focus:outline-none  mb-1 ease-linear transition-all duration-150"
                        type="button"
                      >
                        Register
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
            </div>
          ) : null}
          <div>
            <button
              type="button"
              onClick={() => setShowSign(true)}
              className="bg-blue-500 px-4 py-1 rounded-md border-4 border-blue-800 text-white"
            >
              Register
            </button>
            {showSign ? (
              <div>
                <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                  <div className="relative my-6 mx-auto max-w-[900px]">
                    {/*content*/}
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full outline-none focus:outline-none bg-[#1C1D27]">
                      {/*header*/}
                      <div className="flex items-start justify-between p-5 border-solid border-blueGray-200 rounded-t">
                        <button
                          className="p-1 ml-auto bg-transparent border-0  float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                          onClick={() => setShowSign(false)}
                        >
                          <span className="bg-transparent h-6 w-6 text-2xl block outline-none focus:outline-none text-white">
                            ×
                          </span>
                        </button>
                      </div>
                      {/*body*/}
                      <div className="relative px-6 flex-auto">
                        <h1 className="ml-12 text-2xl text-lightgrey font-primary font-semibold">
                          Register
                        </h1>
                        <form className="flex flex-col justify-center items-center w-[400px] mt-4">
                          <div className="w-[75%] flex flex-col gap-y-4">
                            <label className="text-lightgrey text-lg font-semibold">
                              Username
                            </label>
                            <input
            className="input-field"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
                          </div>
                          <div className="w-[75%] flex flex-col gap-y-4">
                            <label className="text-lightgrey text-lg font-semibold">
                              Password
                            </label>
                            <input
            className="input-field"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
                          </div>
                          <div className="w-[75%] flex flex-col gap-y-4">
                            <label className="text-lightgrey text-lg font-semibold">
                              Email
                            </label>
                            <input
            className="input-field"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
                          </div>
                          <ReCAPTCHA
                            sitekey="6Ld5hH8oAAAAAA-ol_Bgdfe3_PZAmylK2BxvuVt7"
                            onChange={onChange}
                            className="mt-4"
                          />
                          ,
                        </form>
                      </div>
                      {/*footer*/}
                      <div className="flex flex-col items-center justify-end p-6 border-t border-gray-600 rounded-b w-full">
                      <button style={buttonStyle} type="button" onClick={handleRegister}>
          Register
        </button>
                        <button
                          className="text-white font-semibold uppercase text-sm px-6 py-3 rounded shadow w-full hover:shadow-lg outline-none focus:outline-none  mb-1 ease-linear transition-all duration-150"
                          type="button"
                        >
                          Allready have an account ? Sign in
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
              </div>
            ) : null}
          </div>
        </div>

          <div className="flex items-center justify-center gap-x-4 bg-[#1d1f29] shadow-xl py-2 px-6 rounded-md">
            <img
              src={userImage}
              alt=""
              className="w-[35px] h-[35px] bg-gray-500 rounded-full flex items-center justify-center"
            />
            
      <p className="text-white font-primary">Proton</p>
          </div>
        </div>

        <ResponsiveNavbar />
      </div>
    </header>
  );
};

export default Navbar;
