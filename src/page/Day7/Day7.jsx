import React from 'react'
import Nav from './Nav'
import Secction1 from './Secction1'
import Section2 from './Section2'

const Day7 = () => {
  return (
    <div className='' >
      <Nav/>
      <div className='mt-[70px] gap-x-[20px] w-[1200px] mx-auto flex flex-row h-screen px-[24px] '>
        <Secction1/>
        <Section2/>
      </div>
    </div>
  )
}

export default Day7