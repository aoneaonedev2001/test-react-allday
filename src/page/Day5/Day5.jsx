import React from 'react'
import Navbar from './component/Navbar'
import Content1 from './component/Content1'
import Content2 from './component/Content2'
import Content3 from './component/Content3'
const Day5 = () => {
  return (
    <div>
        <Navbar/>
        <Content1/>
        <div className='flex flex-row '>
        <Content2/>
        <Content3/>
        </div>
    </div>
  )
}

export default Day5