import React from 'react'

const Navbaar = () => {
  return (
    <div className='w-[1140px] mx-auto flex flex-row  '>
     <div className='w-1/4'>
       <img className='w-[262px] object-cover h-[105px]' src="https://ssruli.ssru.ac.th/img/base/logo3.png" alt="" />
     </div>
     <div className='w-3/4 '>
      <div className='h-[36px] flex flex-row  justify-end items-center gap-x-[20px] my-[5px] '>
         <p className='text-[14px]'>หน้าหลักมหาวิทยาลัย</p>
         <div className='flex'>
         <input className='w-[217px] h-[34px] rounded-l-[5px] border ' type="text" />
         <button className='w-[46px] h-[34px] border rounded-r-[5px] '>Sersh</button>
         </div>
      </div>
      <div className='bg-[#EFA5C8] h-[150px]'>

      </div>
     </div>
    </div>
  )
}

export default Navbaar