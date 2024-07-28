import React from 'react'

const Context1 = () => {
  return (
    
    <div className='w-[1280px] mx-auto py-[40px] flex flex-row justify-center items-center gap-x-[10px] '>
      
        <input placeholder='Search Jobs' className='w-[412px] h-[65px] text-[#2a2a2e]' type="text" />
        <input placeholder='All Teams' className='w-[325px] h-[65px] text-[#2a2a2e]' type="text" />
        <input placeholder='All Locations' className='w-[325px] h-[65px] text-[#2a2a2e]' type="text" />
        <button className='h-[65px] bg-[#488bf8] text-[white] w-[125px]'>SEARCH</button>
      
    </div>
  )
}

export default Context1