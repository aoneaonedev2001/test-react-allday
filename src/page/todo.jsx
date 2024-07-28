import React, { useState, useEffect } from 'react';

const Todo = () => {
   

    const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

    const handleChick= ()=>{

        const Newtodo ={
            id: new Date().getTime(),
            title:inputValue
        }

        setTodos([...todos, Newtodo])
        localStorage.setItem('Todos',todos)
        setInputValue('');
    }

  return (
    <div className='w-[1080px] mx-auto border-[2px]'>
       <h1 className='text-center'>TODO App</h1>

       <div>
       <input 
       className='border-[2px] w-full p-[10px]'
       type="text"
       value={todos}
       name='todos'
       onChange={(e)=>setInputValue(e.target.value)}
        />
       <button onClick={handleChick}>Addtodo</button>
       </div>
       {todos.map((i)=>(
        <h1>i.title</h1>
       )
       )}
    </div>
  )
}

export default Todo