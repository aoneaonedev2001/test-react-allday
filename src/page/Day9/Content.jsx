import React from 'react'

const Content = () => {
  return (
    <div className='w-[1140px] mx-auto h-screen pt-[50px]'>
      <p className='text-[24px] pb-[10px] border-b-[1px]'>ประกาศการทำแบบฝึกซ้อมการทดสอบภาษาอังกฤษ SSRU-TEP</p>
     <div className='mx-auto w-[999px]'>
        <div className='flex flex-row mt-[60px] gap-x-[5px]'>
          <div className='bg-[#3F448C] w-1/3 h-[10px]'></div>
          <div className='bg-[#337ab7] w-1/3 h-[10px]'></div>
          <div className='bg-[#d5d7d8] w-1/3 h-[10px]'></div>
        </div> 
        <p className='text-center text-[50px] py-[10px]'>ประกาศ</p>
        <div className='flex gap-x-[5px]' >
          <div className='bg-[#d5d7d8] w-1/3 h-[150px]'></div>
          <div className='bg-[#d5d7d8] w-1/3 h-[150px]'></div>
          <div className='bg-[#d5d7d8] w-1/3 h-[150px]'></div>
        </div>
     </div>
    </div>
  )
}

export default Content