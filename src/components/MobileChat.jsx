import React, { useEffect, useState } from "react";
import Users from "./Users";
import { RiFilePaper2Fill } from "react-icons/ri";
import ResponsiveChat from "./ResponsiveChat";
import { motion } from "framer-motion";
import { AiOutlineClose } from "react-icons/ai";
import { BsFillChatFill } from "react-icons/bs";

const MobileChat = () => {
  const [open, setOpen] = useState(false);

  const menuVariants = {
    hidden: {
      x: "0%",
    },
    hiddenAside: {
      x: "100%",
    },
    show: {
      x: "100%",
      transition: {
        ease: [0.6, 0.01, -0.05, 0.9],
      },
    },
    hiddenX: {
      x: 0,
    },
  };
  return (
    <aside>
      <div>
        <BsFillChatFill
          onClick={() => setOpen(!open)}
          className="text-3xl text-grey cursor-pointer"
        />
      </div>

      <motion.div
        variants={menuVariants}
        initial="hidden"
        animate={open ? "show" : ""}
        className="bg-primary w-full absolute bottom-[100%] right-[100%] max-w-[100%] h-[calc(90vh)] px-12 overflow-y-auto"
      >
        <div onClick={() => setOpen(false)} className="xl:hidden sm:block">
          <AiOutlineClose className="text-[1.5rem] text-white absolute top-[97px] right-4 cursor-pointer hover:text-grey transition duration-200 mt-[23px]" />
        </div>
        <div className="mt-[116px] flex justify-between">
          <div className="flex items-center gap-x-2 mt-2">
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
        <ul className="mt-6">
          <Users />
        </ul>
      </motion.div>
    </aside>
  );
};

export default MobileChat;
