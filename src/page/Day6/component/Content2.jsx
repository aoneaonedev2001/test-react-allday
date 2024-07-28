import React from "react";
import { data1, data2 } from "./data";

const Content2 = () => {
  return (
    <div className="w-[1280px] mx-auto flex flex-row pt-[40px]">
      <div className="w-3/4 ">
        <p className="text-[22px] text-[#292929] font-bold">
          Front End/ Full Stack Engineering Manager Bangkok based,{" "}
        </p>
        <p className="text-[22px] text-[#292929]"> relocation provided</p>
        <button className="  mt-[10px] py-[4px] px-[20px] bg-[#488bf8] text-[white] rounded-[50px]">
          Apply Now
        </button>
        <p className="text-[16px] text-[#292929] my-[30px]">
          Bangkok, Thailand
        </p>
        {data1.map((i) => (
          <div key={i.title} className="w-[823px]">
            <p className="text-[16px] text-[#262828] my-[30px] font-bold">{i.title}</p>
            <p className="text-[16px] text-[#292929] my-[30px]">{i.dec}</p>
          </div>
        ))}
      </div>

      <div className="w-1/4">
      <div className="border-b-[1px] pb-[10px] ">
        <p className="text-[24px] font-bold">Share This Job</p>
        <p className="text-[24px] font-bold">Hear from Agodans</p>
      </div>
      <img className="w-[346px] h-[346px] cover rounded-[5px] my-[10px]"  src="https://careersatagoda.com/wp-content/uploads/2022/01/punpikorn-technology-agoda.jpg.webp" alt="" />
      <p className="text-[16px]">We love asking and answering questions so it's common here to express ideas and discuss with others.</p>
      <p className="font-bold text-[16px] my-[10px]">Punpikorn RattanawirojkulSenior Software Engineer</p>

      <div className="border-b-[1px] pb-[10px] ">
        <p className="text-[24px] font-bold">Discover Bangkok</p>
      </div>
      <img className="w-[346px] h-[274px] cover rounded-[5px] my-[10px]"  src="https://careersatagoda.com/wp-content/uploads/2022/02/bangkok1-300x219.jpg.webp" alt="" />
      <p className="text-[16px]">Our operating headquarters are based in the Thai capital of Bangkok, where we employ over 2,000 people from around the globe. While it’s 30°C+ outside, Agodans don’t sweat, knowing they have the coolest jobs out there. If you’re successful at getting a role based in Bangkok, we’ll provide relocation support for you and your family to help you move and settle into your new environment.</p>
      
      </div>
    </div>
  );
};

export default Content2;
