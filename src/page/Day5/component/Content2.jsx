import React from "react";

const Content2 = () => {
  return (
    <div className="border w-2/3 p-[25px]">
      <p className=" py-[10px] text-[20px] text-[#0f0f0f]">
        Jimmy Kimmels Full Interview with Kanye West
      </p>
      <section className="flex flex-row justify-between items-center">
        <div className="flex flex-row items-center gap-x-[10px]">
          <div className="w-[40px] h-[40px] rounded-[50px] bg-black"></div>
          <div>
            <p className="text-[16px]">Jimmy Kimme Live</p>
            <p className="text-[12px] text-[#606060]">19.5M subscribers</p>
          </div>
          <button className="bg-[#0f0f0f] text-white px-[10px] py-[5px] rounded-[50px]">
            Subscibe
          </button>
        </div>
        <div className="flex flex-row gap-x-[10px] items-center">
          <button className="bg-[rgba(0,0,0,0.05)]  px-[10px] py-[5px] rounded-[50px]">
            207k{" "}
          </button>
          <button className="bg-[rgba(0,0,0,0.05)]  px-[10px] py-[5px] rounded-[50px]">
            Share{" "}
          </button>
          <button className="bg-[rgba(0,0,0,0.05)]  px-[10px] py-[5px] rounded-[50px]">
            Dowload
          </button>
          <button className="bg-[rgba(0,0,0,0.05)]  px-[10px] py-[5px] rounded-[50px]">
            ...
          </button>
        </div>
      </section>
      <section className="mt-[10px]">
        <div className="bg-[rgba(0,0,0,0.05)] rounded-[10px] w-full text-[#131313] text-[14px] p-[10px]  ">
          <p>
            11M views 5 years ago #KIMMEL Kanye talks about his passion for
            music and fashion, what he thinks of Donald Trump, Kim’s trip to
            Washington D.C. to meet with him, the two motivating forces in the
            world, overcoming fear, being too caught up in the past, how he
            feels about people being mad at him, his daughter, his fashion
            brand, the meaning behind some of the songs on his latest album, his
            porn preferences, recording his latest albums, mental health, be …
          </p>
        </div>
      </section>
      <section>
          <div className="flex flex-row gap-x-[20px] my-[20px]">
            <p className="text-[20px]">30,565 Comments</p>
            <p className="text-[14px]"> Sort by</p>
          </div>
          <div className="flex flex-row gap-[20px]">
          <button className="bg-[#0f0f0f] text-white px-[10px] py-[5px] rounded-[50px]">A</button>
          <input className="border-b-[1px] w-full " placeholder="Add acomment" type="text" />
          </div>
          <div>
            <div className="flex flex-row gap-[10px] mt-[30px]">
            <div className="w-[40px] h-[40px] rounded-[50px] bg-black"></div>
              <div>
                <p className="text-[13px]">@omarbailal57515 years ago</p>
                <p className="text-[13px]">We're all unpaid actors In some giant script that we didn't write" Kanye West</p>
              </div>
            </div>
          </div>
      </section>
    </div>
  );
};

export default Content2;
