import React from "react";

const Day3 = () => {
  const data = [
    {
      file: "github",
      status: "ubdat",
      day: "10 week",
    },
    {
      file: "github",
      status: "ubdat",
      day: "10 week",
    },
    {
      file: "github",
      status: "delete",
      day: "105 week",
    },
    {
      file: "github",
      status: "ubdat",
      day: "60 week",
    },
    {
      file: "githubw",
      status: "craart",
      day: "10 week",
    },
    {
      file: "github1",
      status: "ubdat",
      day: "40 week",
    },
    {
      file: "github",
      status: "ubdat",
      day: "10 week",
    },
  ];
  return (
    <div>
      <Navbar />
      <div className="max-w-[1280px] mx-auto h-screen ">
        {/* contentt1 */}
        <div className="h-[63px] flex flex-row justify-between items-center border-b-[1px] ">
          <div className=" flex flex-row items-center gap-x-[10px] ">
            <p className="text-[20px]">react</p>
            <div className="text-[12px] border rounded-[10px] px-[10px] text-[#636b76] bg-[#f6f8fa]">
              Public
            </div>
          </div>
          <div className=" flex flex-row items-center gap-x-[10px] text-center ">
            <div className="text-[12px]  h-[28px] w-[128px] border rounded-[10px] px-[10px] text-[#636b76] bg-[#f6f8fa]">
              Watch 391
            </div>
            <div className="text-[12px] h-[28px] w-[128px] border rounded-[10px] px-[10px] text-[#636b76] bg-[#f6f8fa]">
              Fork 4.1k
            </div>
            <div className="text-[12px] h-[28px] w-[128px] border rounded-[10px] px-[10px] text-[#636b76] bg-[#f6f8fa]">
              Star 44.6k
            </div>
          </div>
        </div>
        {/* contentt2*/}
        <div className="flex flex-row">
          <div className="w-[896px] ">
            <div className="flex flex-row justify-between items-center gap-x-[10px] text-[14px] py-[20px]">
              <div className="flex flex-row items-center gap-x-[20px]">
                <div className=" h-[28px] w-[105px] border rounded-[10px] px-[10px] text-[#636b76] bg-[#f6f8fa]">
                  main
                </div>
                <p>1 Branch</p>
                <p>0 Tags</p>
              </div>
              <div className="flex flex-row items-center gap-x-[10px] ">
                <div className=" h-[28px] w-[227px] border rounded-[10px] px-[10px] text-[#636b76] bg-[#f6f8fa]">
                  Go to file
                </div>
                <div className=" text-center h-[28px] w-[105px] border rounded-[10px] px-[10px] text-[#636b76] bg-[#f6f8fa]">
                  Add file
                </div>
                <div className=" text-center text-white h-[28px] w-[105px] border rounded-[10px] px-[10px]  bg-[#1f883d]">
                  Code
                </div>
              </div>
            </div>

            <div className=" text-[14px]">
              <div className="bg-[#f6f8fa] p-[4px] h-[52px] flex flex-row items-center border rounded-t-[5px]">
                jonathandsouza and j.dsouza Change "Nothing or All" to "All or
                Nothing" for poeti
              </div>
              {data.map((i) => (
                <div
                  key={i.day}
                  className="p-[4px] h-[41px] flex flex-row justify-around items-center border rounded-t-[5px]"
                >
                  <p className="w-1/3">{i.file} </p>
                  <p className="w-1/3 text-center">{i.status}</p>
                  <p className="w-1/3 text-end">{i.day}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="w-[full] p-[20px] text-[16px] flex flex-col gap-[20px]">
            <p>About</p>
            <p>Cheatsheets for experienced React developers getting started with TypeScript</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Navbar = () => {
  return (
    <div>
      <div className="flex flex-row justify-between items-center px-[20px] h-[56px] bg-[#f6f8fa] ">
        <div className="flex flex-row gap-x-[10px] items-center">
          <p className="p-[10px] border rounded-[5px]">H</p>
          <svg
            height="32"
            aria-hidden="true"
            viewBox="0 0 16 16"
            version="1.1"
            width="32"
            data-view-component="true"
            class="octicon octicon-mark-github v-align-middle color-fg-default"
          >
            <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>
          </svg>
          <p className="text-[14px] text-[#1f2328]">
            typescript-cheatsheets / react
          </p>
        </div>
        <div className="flex flex-row items-center gap-x-[10px]  ">
          <div className="flex flex-row items-center border rounded-[5px] w-[350px] h-[32px] text-[14px] text-[#636c76px]">
            <p>Type/ to search</p>
          </div>
          <div className="w-[1px] bg-black h-[30px] "></div>
          <div className="flex flex-row items-center border rounded-[5px] w-[50px] h-[32px] text-[14px] text-[#636c76px]">
            <p>+ </p>
          </div>
          <div className="flex flex-row items-center border rounded-[5px] w-[30px] h-[32px] text-[14px] text-[#636c76px]">
            <p>+ </p>
          </div>
          <div className="flex flex-row items-center border rounded-[5px] w-[30px] h-[32px] text-[14px] text-[#636c76px]">
            <p>+ </p>
          </div>
          <div className="flex flex-row items-center border rounded-[5px] w-[30px] h-[32px] text-[14px] text-[#636c76px]">
            <p>+ </p>
          </div>
          <div className="flex flex-row items-center border rounded-[100%] w-[30px] h-[32px] text-[14px] text-[#636c76px]">
            <p>+ </p>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-start  items-center px-[20px] h-[48px] bg-[#f6f8fa] gap-x-[30px] text-[14px] text-[#636c76px] ">
        <p>Code</p>
        <p>Issues</p>
        <p>Pull requests</p>
        <p>Discussions</p>
        <p>Actions</p>
        <p>Security</p>
        <p>Insights</p>
      </div>
    </div>
  );
};

export default Day3;
