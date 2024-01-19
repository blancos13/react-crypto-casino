import React from "react";

const TableUser = ({ item }) => {
  return (
    <div className="flex justify-between py-8 container">
      <div className="w-full gap-y-2 flex flex-col">
        {item.map((val) => {
          return (
            <div
              key={val.id}
              className="flex justify-between items-center w-[100%] text-left lg:pl-8 pl-5"
            >
              <div>
                <p className="text-lightgrey text-xs lg:text-base lg:w-[100px] w-[80px]  text-left ">
                  {val.game}
                </p>
              </div>
              <div>
                <p className="text-lightgrey text-xs lg:text-base lg:w-[100px] w-[50px] text-left lg:ml-0 ml-2">
                  {val.user_name}
                </p>
              </div>
              <div>
                <p className="text-lightgrey text-xs lg:text-base lg:w-[100px] w-[45px]  text-left ml-10 lg:ml-0">
                  {Math.random().toFixed(1).toString()}
                </p>
              </div>
              <div>
                <p className="text-lightgrey text-xs lg:text-base lg:w-[100px] w-[40px] text-left ">
                  {(Math.random() * 10).toFixed(1).toString()}
                </p>
              </div>
              <div>
                <p className="text-lightgrey text-xs lg:text-base lg:w-[100px] w-[50px] text-center lg:ml-0">
                  {(Math.random() * 2).toFixed(1).toString()}x
                </p>
              </div>
              <div>
                <p className="text-lightgrey text-xs lg:text-base w-[100px] text-center ml-4">
                  22:14
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TableUser;
