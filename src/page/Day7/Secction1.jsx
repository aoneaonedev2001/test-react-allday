import React from "react";
import { data1, data2 } from "./Data";
const Secction1 = () => {
  return (
    <div className="w-3/4">
      <section className=" grid grid-cols-3 gap-x-[20px] ">
        {data1.map((i) => (
          <div
            key={i.id}
            className="w-[270px] h-[135px] bg-cover rounded-[10px] cursor-pointer"
            style={{ backgroundImage: `url(${i.img})` }}
          ></div>
        ))}
      </section>

      <section>
        <p className="py-[30px]">Study Plan</p>
        <div className=" grid grid-cols-3 gap-[10px]">
          {data2.map((i) => (
            <div key={i.id} className="w-[275px] h-[88px] p-[5px] flex flex-row border rounded-[5px]">
              <img src={i.img} alt="" className="w-[72px] h-[72px] bg-cover pr-[10px]" />
               <div>
               <p className="text-[14px] text-[#1a1a1a]">{i.title}</p>
               <p className="text-[12px] text-[#52525299]">{i.dec}</p>
               </div>
                
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Secction1;
