import React from 'react'
import { NavLink } from 'react-router-dom';

function Home() {
  return (
    <div className='flex flex-col basis-[100%] justify-center items-center'>
      <h1 className='uppercase text-white text-bold mb-[20px]'>WELCOME TO FUN BOX</h1>
      <div className='flex flex-col bg-slate-400 text-black border border-white h-[250px] w-[250px] md:h-[400px] md:w-[400px]'>
        <div className='flex basis-[50%]'>
          <div className='flex border border-white flex-1 justify-center items-center hover:bg-lime-900'>
            <NavLink to="/calculator" className="uppercase font-mono text-[12px] md:text-[16px]">CALCULATOR</NavLink>
          </div>
          <div className='flex border border-white flex-1 justify-center items-center hover:bg-lime-900'>
            <NavLink to="/to-do" className="uppercase font-mono text-[12px] md:text-[16px]">TO DO LIST</NavLink>
          </div>
          <div className='flex border border-white flex-1 justify-center items-center hover:bg-lime-900'>
            <NavLink to="/quiz" className="uppercase font-mono text-[12px] md:text-[16px]">QUIZ</NavLink>
          </div>
        </div>
        <div className='flex basis-[50%]'>
          <div className='flex border border-white flex-1 justify-center items-center hover:bg-lime-900'>
            <NavLink to="/snake" className="uppercase font-mono text-[12px] md:text-[16px]">SNAKE GAME</NavLink>
          </div>
          <div className='flex border border-white flex-1 justify-center items-center hover:bg-lime-900'>
            <NavLink to="/memory-game" className="uppercase font-mono text-[12px] md:text-[16px]">MEMORY GAME</NavLink>
          </div>
          <div className='flex border border-white flex-1 justify-center items-center hover:bg-lime-900'>
            <NavLink to="/tic-tac-toe" className="uppercase font-mono text-[12px] md:text-[16px]" >TIC TAC TOE</NavLink>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;