import React from 'react'
import Navbar from './component/Navbar'
import Context1 from './component/Context1'
import Context2 from './component/Content2'
const Day6 = () => {
  return (
    <div className=' bg-[rgba(255, 255, 255, 0.7)] text-[#292929]'>
     <Navbar/>
     <div className='bg-[#efefef]'>
     <Context1/>
     </div>
     <Context2/>
     
    </div>
  )
}

export default Day6