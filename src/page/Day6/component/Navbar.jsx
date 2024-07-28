import React from 'react'

const Navbar = () => {
  return (
    <div className='w-[1280px] mx-auto h-[91px] flex flex-row justify-between items-center' >
     <img className='w-[225px] cover h-[50px]' src="https://careersatagoda.com/wp-content/uploads/2020/05/Logo-85.png.webp" alt="" />
     <div className='flex flex-row gap-x-[40px] items-center text-[16px] '>
        <p>Home</p>
        <p>Jobs</p>
        <p>Teams</p>
        <p>Location</p>
        <p>How We Hire</p>
        <p>Life AT Agoda</p>
        <p>Blog</p>
        <p>Students</p>
     </div> 

    </div>
  )
}

export default Navbar