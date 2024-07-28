import React from "react";

const Day1 = () => {
  const icon = [
    {
      logo: (
        <svg
          width="18"
          height="18"
          viewBox="0 0 980 980"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>LinkedIn</title>
          <path
            d="M882 0H98C44.1 0 0 44.1 0 98v784c0 53.9 44.1 98 98 98h784c53.9 0 98-44.1 98-98V98c0-53.9-44.1-98-98-98zM294 833H147V392h147v441zm-73.5-524.3c-49 0-88.2-39.2-88.2-88.2s39.2-88.2 88.2-88.2 88.2 39.2 88.2 88.2-39.2 88.2-88.2 88.2zM833 833H686V573.3c0-39.2-34.3-73.5-73.5-73.5S539 534.1 539 573.3V833H392V392h147v58.8c24.5-39.2 78.4-68.6 122.5-68.6 93.1 0 171.5 78.4 171.5 171.5V833z"
            fill="#0E76A8"
            fill-rule="nonzero"
          ></path>
        </svg>
      ),
    },
    {
      logo: (
        <svg width="18" height="18">
          <title>Google</title>
          <g fill="none" fill-rule="evenodd">
            <path
              d="M9 3.48c1.69 0 2.83.73 3.48 1.34l2.54-2.48C13.46.89 11.43 0 9 0 5.48 0 2.44 2.02.96 4.96l2.91 2.26C4.6 5.05 6.62 3.48 9 3.48z"
              fill="#EA4335"
            ></path>
            <path
              d="M17.64 9.2c0-.74-.06-1.28-.19-1.84H9v3.34h4.96c-.1.83-.64 2.08-1.84 2.92l2.84 2.2c1.7-1.57 2.68-3.88 2.68-6.62z"
              fill="#4285F4"
            ></path>
            <path
              d="M3.88 10.78A5.54 5.54 0 0 1 3.58 9c0-.62.11-1.22.29-1.78L.96 4.96A9.008 9.008 0 0 0 0 9c0 1.45.35 2.82.96 4.04l2.92-2.26z"
              fill="#FBBC05"
            ></path>
            <path
              d="M9 18c2.43 0 4.47-.8 5.96-2.18l-2.84-2.2c-.76.53-1.78.9-3.12.9-2.38 0-4.4-1.57-5.12-3.74L.97 13.04C2.45 15.98 5.48 18 9 18z"
              fill="#34A853"
            ></path>
            <path d="M0 0h18v18H0V0z"></path>
          </g>
        </svg>
      ),
    },
    {
      logo: (
        <svg width="18" height="18">
          <title>Facebook</title>
          <path
            d="M18 1v16c0 .5-.4 1-1 1h-4.6v-7h2.3l.3-2.7h-2.7V6.6c0-.8.2-1.3 1.4-1.3h1.4V2.8c-.2 0-1.1-.1-2.1-.1-2 0-3.4 1.3-3.4 3.6v2H7.3V11h2.3v7H1c-.5 0-1-.4-1-1V1c0-.5.4-1 1-1h16c.6 0 1 .4 1 1z"
            fill="#3B5998"
            fill-rule="evenodd"
          ></path>
        </svg>
      ),
    },
    {
      logo: (
        <svg width="18" height="18">
          <title>Github</title>
          <path
            d="M9 0C4.027 0 0 4.03 0 9a9 9 0 0 0 6.154 8.539c.45.084.615-.194.615-.433 0-.214-.008-.78-.011-1.53-2.504.543-3.032-1.208-3.032-1.208-.41-1.039-1.001-1.316-1.001-1.316-.816-.558.063-.546.063-.546.903.063 1.378.926 1.378.926.803 1.376 2.107.98 2.621.749.081-.582.313-.98.57-1.204-1.999-.225-4.099-1-4.099-4.447 0-.982.349-1.786.926-2.416-.101-.227-.405-1.141.079-2.381 0 0 .753-.242 2.475.922a8.66 8.66 0 0 1 2.25-.304 8.66 8.66 0 0 1 2.25.304c1.71-1.164 2.463-.922 2.463-.922.484 1.24.18 2.154.09 2.381.574.63.923 1.434.923 2.416 0 3.457-2.104 4.219-4.106 4.44.315.27.607.821.607 1.665 0 1.204-.011 2.171-.011 2.464 0 .236.157.517.619.427A8.968 8.968 0 0 0 18 9a9 9 0 0 0-9-9"
            fill-rule="evenodd"
          ></path>
        </svg>
      ),
    },
    {
      logo: (
        <svg viewBox="8 8 24 24" width="18" height="18">
          <title>Apple</title>
          <g
            id="Left-Black-Logo-Small"
            stroke="none"
            stroke-width="1"
            fill="none"
            fill-rule="evenodd"
          ></g>
          <path
            d="M19.8196726,13.1384615 C20.902953,13.1384615 22.2608678,12.406103 23.0695137,11.4296249 C23.8018722,10.5446917 24.3358837,9.30883662 24.3358837,8.07298156 C24.3358837,7.9051494 24.3206262,7.73731723 24.2901113,7.6 C23.0847711,7.64577241 21.6353115,8.4086459 20.7656357,9.43089638 C20.0790496,10.2090273 19.4534933,11.4296249 19.4534933,12.6807374 C19.4534933,12.8638271 19.4840083,13.0469167 19.4992657,13.1079466 C19.5755531,13.1232041 19.6976128,13.1384615 19.8196726,13.1384615 Z M16.0053051,31.6 C17.4852797,31.6 18.1413509,30.6082645 19.9875048,30.6082645 C21.8641736,30.6082645 22.2761252,31.5694851 23.923932,31.5694851 C25.5412238,31.5694851 26.6245041,30.074253 27.6467546,28.6095359 C28.7910648,26.9312142 29.2640464,25.2834075 29.2945613,25.2071202 C29.1877591,25.1766052 26.0904927,23.9102352 26.0904927,20.3552448 C26.0904927,17.2732359 28.5316879,15.8848061 28.6690051,15.7780038 C27.0517133,13.4588684 24.5952606,13.3978385 23.923932,13.3978385 C22.1082931,13.3978385 20.6283185,14.4963764 19.6976128,14.4963764 C18.6906198,14.4963764 17.36322,13.4588684 15.7917006,13.4588684 C12.8012365,13.4588684 9.765,15.9305785 9.765,20.5993643 C9.765,23.4982835 10.8940528,26.565035 12.2824825,28.548506 C13.4725652,30.2268277 14.5100731,31.6 16.0053051,31.6 Z"
            id=""
            fill="#000000"
            fill-rule="nonzero"
          ></path>
        </svg>
      ),
    },
  ];

  const IMG = [
    {
      img: "https://images.ctfassets.net/go6kr6r0ykrq/1HrAT69Fbu8y4R58PGhhM3/3e4bc2aeaa8627bbed2cd81a0d11a63c/Google.svg",
    },
  ];

  return (
    <div className="flex flex-row bg-[#FFF0E5] h-screen  max-w-[1400px] mx-auto   ">
      <div className="C1 w-1/2 border px-[100px] ">
        <h4 href="" className="border-black border w-fit p-[10px] my-[50px]">
          code cademy
        </h4>

        <h4 className="px-[4px] rounded-[5px] bg-green-600 text-white w-fit text-[34px] ">
          Save 50% with Pro
        </h4>

        <h4 className="text-[#10162f] mb-[24px] text-[44px] ">
          Transform your career
        </h4>

        <p className="text-[#10162f] mb-[24px] text-[18px]">
          Create an account for free
        </p>

        <p className="text-[16px] ">* Required</p>

        <form action="" className=" ">
          <label className=" block mt-[20px] mb-2" htmlFor="Email">
            Email
          </label>
          <input
            type="text"
            className="w-full p-[10px] border border-black "
            name="Email"
          />
          <label className=" block mt-[20px] mb-2" htmlFor="Password">
            Password
          </label>
          <input
            type="text"
            className="w-full p-[10px] border border-black "
            name="Password"
          />

          <button className="w-full p-[10px] bg-[#10162f] text-white my-[20px]">
            Singn up
          </button>
        </form>
        <span className="text-[12px]">
          By signing up, you agree to the Codecademy Terms of Service and
          Privacy Policy. This site is protected by reCAPTCHA and the Google
          Privacy Policy and Terms of Service apply.
        </span>
        <p className="text-[16px] my-[5px]">Or sign up using:</p>

        <div className="flex flex-row gap-3">
          {icon.map((i, index) => (
            <button
              key={index}
              className="p-[25px] rounded-[5px] bg-white border border-black"
            >
              {i.logo}
            </button>
          ))}
        </div>

        <p className="mt-[20px]">Already have an account? Log in</p>
      </div>

      <div className="C2  w-1/2 border p-[50px]">
        <div className=" mx-auto w-[492px] h-[461px] bg-amber-400 relative inset-0 ">
          <div className=" absolute top-[0px] left-[-66px] bg-[#10162f] text-white p-2 border border-white ">
            88% of Pro learners reached
          </div>
          <div className=" absolute top-[41px] left-[-66px] bg-[#10162f] text-white p-2 border border-white">
            the goal they set out to achieve
          </div>
          <div className=" p-[15px] absolute bottom-[0px] right-[-30px] border border-black bg-white text-[14px]">
            <h2>
              “With not that much money, especially when compared to bootcamps,
              I was able to learn so much. Codecademy is a steal compared to a
              bootcamp!”- Stina Nieman, Software Business Analyst @ Wayside
              Publishing
            </h2>
          </div>
        </div>
        <h3 className=" text-[22px] my-[20px]">Guided learning that fits your timeline 100% made by experts</h3>
        
        <div className="text-[16px] flex flex-col gap-5 mb-[30px]" >
          <p>400+ courses, 45+ technical skill paths, 12 structured career paths</p>
          <p>Build your professional portfolio with real-world projects</p>
          <p>Uncover what to expect and prepare for technical interviews</p>
          <p>Take your learning on the go with unlimited mobile practice</p>
        </div>

      </div>
    </div>
  );
};

export default Day1;
