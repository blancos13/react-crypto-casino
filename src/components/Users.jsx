import React from "react";
import { data } from "../data";
// console.log(data);

const userData = data.map((user, idx) => {
  return user;
});

const Users = () => {
  // const { user_name, avatar, level, time } = user;

  // console.log(user);

  return (
    <div className="flex flex-col gap-y-14">
      {userData.map((user, idx) => {
        return (
          <div className="flex items-center gap-x-2 h-[70px]" key={idx}>
            <div className="w-12 overflow-hidden bg-blue-500 rounded-full flex">
              <img src={user.avatar} alt="" />
            </div>

            <div className="flex flex-col items-start -mt-8">
              <div className="flex justify-center items-center gap-x-4">
                <div>
                  <small className="text-white text-base font-semibold">
                    {user.user_name}
                  </small>
                </div>
                <div className="bg-[#A19879] px-4 rounded-sm text-semibold text-xl">
                  <small>LVL{user.level}</small>
                </div>
                <div>
                  <small className="text-grey">{user.time}</small>
                </div>
              </div>
              <div className="bg-gray-800 rounded-md px-2 py-2 -mb-6 mt-1">
                <p className="text-white">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Users;
