import {useState} from "react";
import C1 from "../component/Breadcrumb/c1";
import C2 from "../component/Breadcrumb/c2";
import C3 from "../component/Breadcrumb/c3";
import C4 from "../component/Breadcrumb/c4";

const TestReact = () => {
  const[ShowBreadcrumb,setShowBreadcrumb]=useState('c1')

  return (
    <div className="flex flex-row ">
      <div className="w-[250px] mx-[1rem] h-[1000px] border-[2px]">
          <button className="">
          <svg width="24" height="24" fill="none" aria-hidden="true" class="mr-3 flex-none"><path d="m19 19-3.5-3.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><circle cx="11" cy="11" r="6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></circle></svg>
          </button>
        </div>
      <div className="flex flex-col pt-[30px] pl-[20px] gap-[10px] ">
        <p className="text-[#0EA5E9] text-[14px]">Installation</p>
        <h3 className="text-[36px]">Get started with Tailwind CSS</h3>
        <div>
          <p className="text-[16px]">
            Tailwind CSS works by scanning all of your HTML files, JavaScript
            components, and any other templates
          </p>
          <p className="text-[16px]">
            for class names, generating the corresponding styles and then writing
            them to a static CSS file
          </p>
        </div>
        <p className="text-[16px]">
        It's fast, flexible, and reliable — with zero-runtime.
        </p>
        <p className="text-[20px]">Installation</p>
        <div className="flex flex-row pb-[20px] gap-4 mt-[20px] ">
          <p onClick={()=>setShowBreadcrumb('c1')} className={`pb-[5px] cursor-pointer ${ShowBreadcrumb ==='c1'&& 'border-[#0EA5E9] border-b-[2px]'}`}>Tailwind CLI</p>
          <p onClick={()=>setShowBreadcrumb('c2')} className={`pb-[5px] cursor-pointer ${ShowBreadcrumb ==='c2'&& 'border-[#0EA5E9] border-b-[2px]'}`}>Using PostCSS</p>
          <p onClick={()=>setShowBreadcrumb('c3')} className={`pb-[5px] cursor-pointer ${ShowBreadcrumb ==='c3'&& 'border-[#0EA5E9] border-b-[2px]'}`}>Framework Guides</p>
          <p onClick={()=>setShowBreadcrumb('c4')} className={`pb-[5px] cursor-pointer ${ShowBreadcrumb ==='c4'&& 'border-[#0EA5E9] border-b-[2px]'}`}>Play CDN</p>
        </div>
          {ShowBreadcrumb ==='c1' && <C1/> }
          {ShowBreadcrumb ==='c2' && <C2/> }
          {ShowBreadcrumb ==='c3' && <C3/> }
          {ShowBreadcrumb ==='c4' && <C4/> }
         

      </div>
    </div>
  );
};

export default TestReact;
