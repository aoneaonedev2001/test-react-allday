import React from 'react'
import {Routes, Route } from 'react-router-dom';
import TestReact from './page/TestReact';
import Nav from './component/Nav';
import Todo from './page/todo';
import Day1 from './page/Day1';
import Day2 from './page/Day2';
import Day3 from './page/Day3';
import Day4 from './page/Day4/Day4';
import Day5 from './page/Day5/Day5';
import Day6 from './page/Day6/Day6';
import Day7 from './page/Day7/Day7';
import Day8 from './page/Day8/Day8'
import Day9 from './page/Day9/Day'
const App = () => {
  return (
    <div>
      {/* <Nav/> */}
       <Routes>
         <Route path="/" element={<TestReact />} />
         <Route path="/todo" element={<Todo />} />
         <Route path='day1'  element={<Day1/>}/>
         <Route path='day2'  element={<Day2/>}/>
         <Route path='day3' element={<Day3/>}/>
         <Route path='day4' element={<Day4/>}/>
         <Route path='day5' element={<Day5/>}/>
         <Route path='day6' element={<Day6/>}/>
         <Route path="day7" element={<Day7/>}/>
         <Route path='day8' element={<Day8/>}/>
         <Route path='day9' element={<Day9/>}/>
       </Routes>
    </div>
  )
}

export default App