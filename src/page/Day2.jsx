import React from 'react'
import Nav from '../component/Nav'
const Day2 = () => {
    const data1=[{
        text:"The basics"
    },{
        text:"ENverromment setup"
    },{
        text:"Working "
    },{
        text:"Perfomman"
    }
    ,{
        text:"Javascrip Runttime"
    },
    {
        text:"ENverromment setup"
    },{
        text:"Working "
    },{
        text:"Perfomman"
    }
    ,{
        text:"Javascrip Runttime"
    }
]
  return (
    <div className='h-screen'>
        <Nav/>
        <div className='flex flex-row h-full  '>
             <div className='w-[300px] border flex flex-col items-center h-full '>
                
                 {data1.map((i)=>(
                    <div className="flex flex-row justify-between w-full px-[30px] p-[6px]">
                    <p>{i.text}</p>
                    <p>f</p>
                    </div>
                 ))}
                 
             </div>
             <div className=' border px-[20px] pt-[30px] w-full'>
                 <p className='text-[51px]'>Get Started with React Native</p>
             </div>

        </div>
        
      
    </div>
  )
}
 
export default Day2
