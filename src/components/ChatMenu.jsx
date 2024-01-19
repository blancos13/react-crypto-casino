import React, { useEffect, useState } from "react";
import Users from "./Users";
import { RiFilePaper2Fill } from "react-icons/ri";
import ResponsiveChat from "./ResponsiveChat";
import { BsFillChatLeftFill } from "react-icons/bs";
import { motion } from "framer-motion";
import { AiOutlineClose } from "react-icons/ai"; 

const ChatMenu = () => {
  const [open, setOpen] = useState(false);

  const menuVariants = {
    hidden: {
      x: "0%",
    },
    hiddenAside: {
      x: "100%",
    },
    show: {
      x: 800,
      transition: {
        ease: [0.6, 0.01, -0.05, 0.9],
      },
    },
    hiddenX: {
      x: -500,
    },
  };
  return (
    <aside className="fixed top-0 left-0 w-[350px] h-full px-6">
      <div className="bg-gray-700 w-12 h-12 rounded-lg absolute top-[120px] left-[0px] p-3 hidden sm:block xl:hidden ">
        <BsFillChatLeftFill
          onClick={() => setOpen(true)}
          className="xl:hidden flex justify-center items-center w-full h-full text-white text-2xl cursor-pointer"
        />
      </div>
      <motion.div
        variants={menuVariants}
        initial="hiddenX"
        animate={open ? "show" : ""}
        className="bg-primary shadow-2xl w-full fixed top-0 sm:-left-[800px] md:-left-[800px] lg:left-[500px] max-w-[400px] h-full px-8 aside-div"
      >
        <div onClick={() => setOpen(false)} className="lg:hidden sm:block">
          <AiOutlineClose className="text-[1.5rem] text-white absolute top-[97px] right-4 cursor-pointer hover:text-grey transition duration-200" />
        </div>
        <div className="mt-24 flex justify-between">
          <div className="flex items-center gap-x-2">
            <div className="bg-[green] w-4 h-4 rounded-full"></div>
            <p className="text-grey font-semibold">350 Online</p>
          </div>
          <div className="flex items-center gap-x-2 sm:mr-6">
            <RiFilePaper2Fill className="text-xl text-grey" />
            <a href="#" className="text-grey">
              Chat Rules
            </a>
          </div>
        </div>
        <ul className="mt-8">
          <Users />
        </ul>
      </motion.div>
    </aside>
  );
};

export default ChatMenu;
