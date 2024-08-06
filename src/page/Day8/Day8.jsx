import React from 'react'
import Navbar from './Navbar'
import Section1 from './Section1'
import Section2 from './Section2'
import Section3 from './Section3'

const Day8 = () => {
  return (
    <div>
        <Navbar/>
        <div className='flex flex-row pt-[10px] h-screen '> 
        <Section1/>
        <Section2/>
        <Section3/>
        </div>
        
    </div>
  )
}

export default Day8