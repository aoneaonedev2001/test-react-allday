import React from "react";

const Nav = () => {
  return (
    <div className="  h-[50px] border-b-[1px] text-[16px] text-[#0000008c] ">
      <div className="w-[1200px] mx-auto h-full flex flex-row items-center justify-between px-[24px]">
        <div className="flex flex-row text-[16px] gap-x-[20px]">
          <a href="">Explore</a>
          <a href="">Problems</a>
          <a href="'">Contest</a>
          <a href="">Discuss</a>
          <a href="">Interview</a>
          <a href="">Store</a>
        </div>
        <div className="flex flex-row text-[14px] gap-x-[10px] items-center">
          <a href="">Register</a>
          <p>or</p>
          <a href="">Sing in</a>
          <div className="bg-[#ffa1161f] text-[#ffa116] rounded-[10px] w-[84px]  h-[32px] flex items-center justify-center">
            <a href="">Premium</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
