import React, { useState } from "react";
import { betData } from "../betData";
import { category } from "../category";
import TableUser from "./TableUser";
import TableButtons from "./TableButtons";

const Tables = () => {
  const [item, setItems] = useState(betData)
  const menuItems = [...new Set(category.map((ctg) => ctg.category))]

  return (
    <div className="md:w-[800px] lg:w-[90%] w-[95%] sm:ml-[70px] sm:w-[700px] ml-[10px] lg:ml-[420px] xl:ml-[480px] xl:w-[70%] md:mr-8 lg:mr-8 bg-[#1C1D27] h-[550px] mt-16 shadow-lg rounded-lg bet-div overflow-scroll">
      <div className="flex justify-between gap-x-16 xl:gap-x-32 px-0 lg:px-8 py-8 w-full">
        <TableButtons menuItems={menuItems}/>
      </div>
      <div className="flex justify-between px-0  lg:px-8">
        <TableUser item={item}/>
      </div>
    </div>
  );
};

export default Tables;
