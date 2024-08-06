import React from 'react'

const Navbar = () => {
  return (
    <div className='h-[63px] border-b-[1px] flex flex-row justify-between items-center text-[17px] px-[20px] '>
       <div className='flex gap-x-[10px] items-center '>
        <img className='w-[34px] h-[34px]' src="https://redux.js.org/img/redux.svg" alt="" />
        <a className='text-[#764abc]' href="">Redux</a>
       </div>
       <div className='flex gap-x-[20px] items-center'>
       <a className='text-[#1c1e21] hover:text-[#764abc]' href="">Getting start</a>
       <a className='text-[#1c1e21] hover:text-[#764abc]' href="">Tutooorial</a>
       <a className='text-[#1c1e21] hover:text-[#764abc]' href="">Usage Guide</a>
       <a className='text-[#1c1e21] hover:text-[#764abc]' href="">API</a>
       <a className='text-[#1c1e21] hover:text-[#764abc]' href="">FAQ</a>
       <a className='text-[#1c1e21] hover:text-[#764abc]' href="">Best Practicces</a>
       <a className='text-[#1c1e21] hover:text-[#764abc]' href="">GitHub</a>
       <a className='text-[#1c1e21] hover:text-[#764abc]' href="">Need Help</a>
       <div className='bg-[#ebedf0] hover:border-[#764abc] hover:border-[2px] w-[158px] h-[36px] rounded-[10px] flex justify-center items-center'>
        <p className='text-[#969faf]'>Search</p>
       </div>
       
       </div>
    </div>
  )
}

export default Navbar