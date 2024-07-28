import React from 'react'

const Content3 = () => {
  return (
    <div className='border w-1/3 p-[10px]'>
     <div className='flex flex-row gap-x-2 items-center mt-[20px] mb-[10px]'>
       <button className='bg-[rgba(0,0,0,0.05)] px-[15px] py-[8px] rounded-[5px] text-[14px]'>
         All
       </button>
       <button className='bg-[rgba(0,0,0,0.05)] px-[15px] py-[8px] rounded-[5px] text-[14px]'>
         From your serch
       </button>
       <button className='bg-[rgba(0,0,0,0.05)] px-[15px] py-[8px] rounded-[5px] text-[14px]'>
         From Jimmy Kimmel
       </button>
     </div>
     <div className='flex flex-col gap-y-[10px]'>
        <div className='flex flex-row '>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlb5fE4CiK2wDJxX03IUcLdtakIXksXDNTLw&s" alt="" className='w-[168px] h-[94] cover rounded-[5px]' />
            <div className='p-[10px]'>
              <p className='text-[14px]'>of Donald Trump, Kim trip to</p>
              <p className='text-[#606060] text-[12px] pt-[6px]'>Kanye talks about his</p>
              <div className='flex flex-row gap-x-[10px]'>
                <p className='text-[#606060] text-[12px] pt-[6px]'>99.3m</p>
                <p className='text-[#606060] text-[12px] pt-[6px]'>1 year ago</p>
              </div>
            </div>
        </div>
        
     </div>
    </div>
  )
}

export default Content3