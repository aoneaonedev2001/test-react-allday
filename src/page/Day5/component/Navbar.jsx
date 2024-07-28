import React from "react";

const Navbar = () => {
  return (
    <div className="h-[56px] bg-[#0f0f0f] flex flex-row justify-around items-center ">
      <div className="flex flex-row items-center gap-x-[10px] ">
        <p className="text-white text-[10px]">hamberger</p>
        <p className="text-white text-[10px]">Youttube</p>
      </div>
      <div className="text-white flex items-center  ">
        <input
          className=" w-[536px] h-[40px] border rounded-l-[50px] "
          type="text"
        />
        <button className="w-[64px] h-[40px] rounded-r-[50px] bg-[hsla(0,0%,100%,0.08)]">
          Search
        </button>
        <button className=" ml-[10px] w-[40px] h-[40px] rounded-[50px] bg-[hsla(0,0%,100%,0.08)]">
          Mic
        </button>
      </div>
      <div className="flex flex-row items-center">
        <button className=" ml-[10px] w-[40px] h-[40px] rounded-[50px] bg-white">
          A
        </button>
      </div>
    </div>
  );
};

export default Navbar;
