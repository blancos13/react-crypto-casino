import React, { useState } from "react";
import { RiFilePaper2Fill } from "react-icons/ri";
import Users from "./Users";
import { BsFillChatLeftFill } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import { motion } from "framer-motion";

const menuVariants = {
  hidden: {
    x: "150%",
  },
  show: {
    x: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.9],
    },
  },
};

const ResponsiveChat = () => {
  const [open, setOpen] = useState(true);

  return (
    <aside className="fixed top-[80px] left-0 bg-primary max-w-[350px] w-full z-30">
      <div
        className={` ${
          open ? "w-[350px]" : "w-0 -left-[350px]"
        } bg-dark-purple h-screen p-5  pt-8 relative duration-300`}
      >
        <BsFillChatLeftFill
          onClick={() => setOpen(true)}
          className="text-white absolute left-[0px]"
        />
        <ul className="mt-8">
          <UserList />
        </ul>
      </div>
    </aside>
  );
};

export default ResponsiveChat;
