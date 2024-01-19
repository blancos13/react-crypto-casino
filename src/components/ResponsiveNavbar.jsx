import React, { Fragment, useState } from "react";

import { BiChevronDown, BiMenu } from "react-icons/bi";
import { motion } from "framer-motion";
import { Menu, Transition } from "@headlessui/react";
import { GiPerspectiveDiceSixFacesTwo, GiTrophyCup } from "react-icons/gi";
import { BsDiscord, BsFillGiftFill } from "react-icons/bs";
import { TbCardsFilled } from "react-icons/tb";
import { MdTimer } from "react-icons/md";
import { Link } from "react-router-dom";

const menuVariants = {
  hidden: {
    x: "100%",
  },
  show: {
    x: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.9],
    },
  },
};

const classNames = (...classes) => {
    return classes.filter(Boolean).join(" ");
};

const ResponsiveNavbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <nav className="text-primary sm:block xl:hidden">
      <div
        onClick={() => setOpenMenu(!openMenu)}
        className="text-3xl cursor-pointer"
      >
        <BiMenu className="text-white ml-2 bg-grey2 w-10 h-10 p-2 rounded-md hover:bg-gray-700 transition duration-200 hidden sm:block" />
      </div>

      <motion.div
        variants={menuVariants}
        initial="hidden"
        animate={openMenu ? "show" : ""}
        className="bg-primary shadow-2xl w-full absolute top-[75px] right-0 bottom-0 max-w-[250px] h-[calc(100vh+140px)]"
      >
        <div
          onClick={() => setOpenMenu(false)}
          className="text-4xl absolute z-30 left-4 top-14 text-primary cursor-pointer"
        ></div>
        <ul className="h-full w-full flex flex-col justify-start items-start gap-y-8 text-white font-semibold font-primary text-xl px-4 py-8">
          <Menu as="div" className="relative inline-block text-left">
            <div className="flex items-center justify-center gap-x-2 text-blue-600">
              <GiPerspectiveDiceSixFacesTwo className="text-2xl" />
              <Menu.Button className="font-semibold flex items-center">
                <a href="#">
                  GAMES
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
              <Menu.Items className="fixed right-0 left-0 z-10 mt-6 w-[100vw]  rounded-md bg-primary shadow-lg ring-1 ring-primary ring-opacity-5 focus:outline-none">
                <div className="py-1 px-6">
                  <Menu.Item as={ Link } name='crash' to='/games/crash/*'>
                    {({ active }) => (
                      <div className="hover:opacity-80 cursor-pointer transition-all duration-200">
                        <a
                          href="#"
                          className={classNames(
                            active ? "text-lightgrey" : "text-grey",
                            "block px-4 py-2 text-lg font-semibold"
                          )}
                        >
                          CRASH
                        </a>
                      </div>
                    )}
                  </Menu.Item>
                </div>
                <div className="py-1 px-6">
                  <Menu.Item as={ Link } name='roulette' to='/games/roulette/*'>
                    {({ active }) => (
                      <div className="hover:opacity-80 cursor-pointer transition-all duration-200">
                        <a
                          href="#"
                          className={classNames(
                            active ? "text-lightgrey" : "text-grey",
                            "block px-4 py-2 text-lg font-semibold"
                          )}
                        >
                          ROULETTE
                        </a>
                      </div>
                    )}
                  </Menu.Item>
                </div>
                <div className="py-1 px-6">
                  <Menu.Item as={ Link } name='slots' to='/games/slots/*'>
                    {({ active }) => (
                      <div className="hover:opacity-80 cursor-pointer transition-all duration-200">
                        <a
                          href="#"
                          className={classNames(
                            active ? "text-lightgrey" : "text-grey",
                            "block px-4 py-2 text-lg font-semibold"
                          )}
                        >
                          SLOTS
                        </a>
                      </div>
                    )}
                  </Menu.Item>
                </div>
                <div className="py-1 px-6">
                  <Menu.Item as={ Link } name='blackjack' to='/games/blackjack/*'>
                    {({ active }) => (
                      <div className="hover:opacity-80 cursor-pointer transition-all duration-200">
                        <a
                          href="#"
                          className={classNames(
                            active ? "text-lightgrey" : "text-grey",
                            "block px-4 py-2 text-lg font-semibold"
                          )}
                        >
                          BLACKJACK
                        </a>
                      </div>
                    )}
                  </Menu.Item>
                </div>
                <div className="py-1 px-6">
                  <Menu.Item as={ Link } name='reme' to='/games/reme/*'>
                    {({ active }) => (
                      <div className="hover:opacity-80 cursor-pointer transition-all duration-200">
                        <a
                          href="#"
                          className={classNames(
                            active ? "text-lightgrey" : "text-grey",
                            "block px-4 py-2 text-lg font-semibold"
                          )}
                        >
                          REME
                        </a>
                      </div>
                    )}
                  </Menu.Item>
                </div>
                <div className="py-1 px-6">
                  <Menu.Item as={ Link } name='limbo' to='/games/limbo/*'>
                    {({ active }) => (
                      <div className="hover:opacity-80 cursor-pointer transition-all duration-200">
                        <a
                          href="#"
                          className={classNames(
                            active ? "text-lightgrey" : "text-grey",
                            "block px-4 py-2 text-lg font-semibold"
                          )}
                        >
                          LIMBO
                        </a>
                      </div>
                    )}
                  </Menu.Item>
                </div>
                <div className="py-1 px-6">
                  <Menu.Item as={ Link } name='coinflip' to='/games/coinflip/*'>
                    {({ active }) => (
                      <div className="hover:opacity-80 cursor-pointer transition-all duration-200">
                        <a
                          href="#"
                          className={classNames(
                            active ? "text-lightgrey" : "text-grey",
                            "block px-4 py-2 text-lg font-semibold"
                          )}
                        >
                          COINFLIP
                        </a>
                      </div>
                    )}
                  </Menu.Item>
                </div>
                <div className="py-1 px-6">
                  <Menu.Item as={ Link } name='towers' to='/games/towers/*'>
                    {({ active }) => (
                      <div className="hover:opacity-80 cursor-pointer transition-all duration-200">
                        <a
                          href="#"
                          className={classNames(
                            active ? "text-lightgrey" : "text-grey",
                            "block px-4 py-2 text-lg font-semibold"
                          )}
                        >
                          TOWERS
                        </a>
                      </div>
                    )}
                  </Menu.Item>
                </div>
                <div className="py-1 px-6">
                  <Menu.Item as={ Link } name='mines' to='/games/mines/*'>
                    {({ active }) => (
                      <div className="hover:opacity-80 cursor-pointer transition-all duration-200">
                        <a
                          href="#"
                          className={classNames(
                            active ? "text-lightgrey" : "text-grey",
                            "block px-4 py-2 text-lg font-semibold"
                          )}
                        >
                          MINES
                        </a>
                      </div>
                    )}
                  </Menu.Item>
                </div>
                <div className="py-1 px-6">
                  <Menu.Item as={ Link } name='unboxing' to='/games/unboxing/*'>
                    {({ active }) => (
                      <div className="hover:opacity-80 cursor-pointer transition-all duration-200">
                        <a
                          href="#"
                          className={classNames(
                            active ? "text-lightgrey" : "text-grey",
                            "block px-4 py-2 text-lg font-semibold"
                          )}
                        >
                          UNBOXING
                        </a>
                      </div>
                    )}
                  </Menu.Item>
                </div>
                <div className="py-1 px-6">
                  <Menu.Item as={ Link } name='dice' to='/games/dice/*'>
                    {({ active }) => (
                      <div className="hover:opacity-80 cursor-pointer transition-all duration-200">
                        <a
                          href="#"
                          className={classNames(
                            active ? "text-lightgrey" : "text-grey",
                            "block px-4 py-2 text-lg font-semibold"
                          )}
                        >
                          DICE
                        </a>
                      </div>
                    )}
                  </Menu.Item>
                </div>
                <div className="py-1 px-6">
                  <Menu.Item as={ Link } name='keno' to='/games/keno/*'>
                    {({ active }) => (
                      <div className="hover:opacity-80 cursor-pointer transition-all duration-200">
                        <a
                          href="#"
                          className={classNames(
                            active ? "text-lightgrey" : "text-grey",
                            "block px-4 py-2 text-lg font-semibold"
                          )}
                        >
                          KENO
                        </a>
                      </div>
                    )}
                  </Menu.Item>
                </div>
                <div className="py-1 px-6">
                  <Menu.Item as={ Link } name='plinko' to='/games/plinko/*'>
                    {({ active }) => (
                      <div className="hover:opacity-80 cursor-pointer transition-all duration-200">
                        <a
                          href="#"
                          className={classNames(
                            active ? "text-lightgrey" : "text-grey",
                            "block px-4 py-2 text-lg font-semibold"
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
            <div className="flex items-center justify-center gap-x-2 text-blue-600">
              <BsFillGiftFill className="text-xl" />
              <Menu.Button className="font-semibold flex items-center">
                <a href="#" className="pt-1">
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
              <Menu.Items className="fixed right-0 left-0 z-10 mt-6 w-[100vw]  rounded-md bg-primary shadow-lg ring-1 ring-primary ring-opacity-5 focus:outline-none">
                <div className="py-1 px-6">
                  <Menu.Item>
                    {({ active }) => (
                      <div className="hover:opacity-80 cursor-pointer transition-all duration-200">
                        <a
                          href="#"
                          className={classNames(
                            active ? "text-lightgrey" : "text-grey",
                            "block px-4 py-2 text-lg font-semibold"
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
                        <a
                          href="#"
                          className={classNames(
                            active ? "text-lightgrey" : "text-grey",
                            "block px-4 py-2 text-lg font-semibold"
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
          <li className="text-grey flex justify-center items-center gap-x-1">
            <TbCardsFilled className="text-2xl" />
            <a href="#" className="pt-1">AFFILIATES</a>
          </li>
          <li className="text-grey flex justify-center items-center gap-x-1">
            <GiTrophyCup className="text-2xl" />
            <a href="#">LEADERBOEARD</a>
          </li>
          <li className="text-grey flex justify-center items-center gap-x-1">
            <MdTimer className="text-2xl" />
            <a href="#">RACE</a>
          </li>
          <li className="text-grey flex justify-center items-center gap-x-1">
            <BsDiscord className="text-2xl" />
            <a href="#">DISCORD</a>
          </li>
        </ul>
      </motion.div>
    </nav>
  );
};

export default ResponsiveNavbar;
