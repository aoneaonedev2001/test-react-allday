import React from "react";

const Day4 = () => {
  return (
    <div className="">
      <section
        className="h-[116px]  bg-repeat-x "
        style={{backgroundImage:'url("https://v.fastcdn.co/u/595c9b42/64873746-0-2024-Promo-Refresh--.svg")'}}
        >
     </section>
      <section className="flex flex-col items-center justify-center h-[490px] bg-[rgb(255,240,229)] ">
        <div className="w-[960px] h-full flex flex-row ">
            <div className="w-1/2 text-[#10162f]">
                  <img src="https://v.fastcdn.co/u/595c9b42/59260392-0-Codecademy-navy.svg" className="w-[120px] h-[26px] py-[50px]"   /> 
                  <h1 className="text-[83px] pb-[30px]">Save on Pro</h1>
                  <div className="pb-[30px]">
                  <p>Now through July 23rd, we’re offering 50% off </p>
                  <p>annual memberships to Codecademy Pro with </p>
                  <p>code UPSKILL50 at checkout.</p>
                  </div>
                  <div className=" relative w-[265px] h-[56px] bg-[#050505] rounded-[2px] ">
                    <button className=" rounded-[2px] text-white absolute w-[265px] h-[56px] bg-[#3a10e5] top-[-8px] right-[-8px] ">
                        Join Pro for 50% off
                    </button>
                  </div>
            </div>
            <div className="w-1/2 flex flex-col justify-center pt-[50px] ">
                 <div className=" relative w-[403px] h-[264px] bg-cover  "
                 style={{backgroundImage:'url("https://v.fastcdn.co/u/595c9b42/64054884-0-Diagonal-Pattern-1.svg")'}}>
                    <div className=" bg-cover absolute w-[403px] h-[264px] top-[-8px] right-[-8px]" style={{backgroundImage:'url("https://v.fastcdn.co/u/595c9b42/64056000-0-Learning-Environment.gif")'}}>

                    </div>
                 </div>
            </div>
        </div>  
      </section>
      <section  className="flex flex-col justify-center items-center bg-[#3a10e5] h-[386px]">
          <div className=" text-center w-[960px] text-white h-full flex flex-col justify-center items-center pt-[90px] ">
              <div className=" rounded-[100%] border border-black w-[80px] h-[80px] bg-white "> </div>
              <div className="text-[23px] mt-[10px]">
                <p>”Don't fall for the idea that you need to do big boot camps</p>
                <p>or 3-year degrees — Codecademy has some really good</p>
                <p>content that can help you get a job.”</p>
              </div>
              <p className="text-[13px] pt-[16px]">Jacinta, Codecademy learner</p>
          </div>
      </section>
      <section className="h-[799px] bg-[#10162f] flex flex-col justify-center items-center pt-[50px]">
         <p className=" pb-[50px] text-[35px] text-center text-white">Get 50% off Pro</p>

         <div className=" relative h-[550px] w-[413px]" style={{backgroundImage:'url("https://v.fastcdn.co/u/595c9b42/63056577-0-Pattern-Fill---Diago.png")'}}>
         <div className=" absolute  w-[413px] top-[-8px] right-[-8px] text-[#10162f] ">
            <div className="bg-[#FFD300]  p-[20px] rounded-t-[5px] text-[35px] border-b-[#10162f] border-b-[2px]">
             <p>Pro</p>
            </div>
            <div className="bg-white  p-[20px] flex flex-col justify-end">
                <p className="text-[26px]">$239.88</p>
                <p className="text-[52px] text-center pt-[25px]">$119.94</p>
                <p className="text-[15px] text-center pt-[10px] pb-[20px] border-b-[#10162f] border-b-[2px] border-dashed ">Billed annually</p>
                <p className="text-center text-[17px] mt-[50px] ">Develop the skills and</p>
                <p className="text-center text-[17px] pb-[40px]">experience to land a job in tech.</p>
                
                <button className=" self-center w-[215px]  h-[56px] text-[17px] text-white rounded-[2px] bg-[#3a10e5] mb-[20px]">Join Pro</button>
                
                
            </div>
          </div>
         </div>
      </section>
    </div>
  );
};

export default Day4;
