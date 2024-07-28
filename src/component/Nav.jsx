import React from "react";

const Nav = () => {
  return (
    <>
    <div className="bg-[#242526] h-[56px]  text-center text-[20px] text-white flex justify-center items-center ">
      <p>Support Ukraine 🇺🇦 Help Provide <a className="text-[#61dafb] underline decoration-[#61dafb] " href="">Humanitarian Aid to Ukraine.</a></p>
    </div>
      <div className=" px-[10px] bg-[#242526] h-[63px] text-white text-[17px] flex flex-row justify-between items-center ">
          <div className="flex flex-row gap-[20px] ">
            <p>React Native</p>
            <p>0.74</p>
          </div>
          <div className="flex flex-row gap-[20px]  ">
                <div className="hover:text-[#61dafb] cursor-pointer">Development</div>
                <div className="hover:text-[#61dafb] cursor-pointer">Contributing</div>
                <div className="hover:text-[#61dafb] cursor-pointer">Community</div>
                <div className="hover:text-[#61dafb] cursor-pointer">Showcase</div>
                <div className="hover:text-[#61dafb] cursor-pointer">Blog</div>
                <div></div>

          </div>
      </div>
    </>
  );
};

export default Nav;
