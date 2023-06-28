import React, { useState } from 'react';
import { AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <a href="/" className="text-white font-bold text-xl">FUN BOX</a>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <NavLink to="/tic-tac-toe" activeClassName="text-white font-bold uppercase">
                  TicTacToe
                </NavLink>
                <NavLink to="/to-do" activeClassName="text-white font-bold uppercase">
                  TodoList
                </NavLink>
                <NavLink to="/snake" activeClassName="text-white font-bold uppercase">
                  Snake Game
                </NavLink>
                <NavLink to="/memory-game" activeClassName="text-white font-bold uppercase">
                  Memory Game
                </NavLink>
                <NavLink to="/calculator" activeClassName="text-white font-bold uppercase">
                  Calculator
                </NavLink>
                <NavLink to="/quiz" activeClassName="text-white font-bold uppercase">
                  Quiz
                </NavLink>
              </div>
            </div>
          </div>
          <div className="md:hidden">
            <button
              type="button"
              className="text-white cursor-pointer hover:text-gray-300 focus:outline-none focus:text-gray-300"
              onClick={toggleMenu}
            >
                {menuOpen ? (
                  <AiOutlineMenu/>
                ) : (
                  <AiOutlineMenu/>
                )}
            </button>
          </div>
        </div>
        <div
          className={`md:hidden ${menuOpen ? 'block' : 'hidden'}`}
          id="mobile-menu"
        >
          <div className=" flex flex-col items-center px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <NavLink to="/tic-tac-toe" activeClassName="text-white">
              TicTacToe
            </NavLink>
            <NavLink to="/to-do" activeClassName="text-white">
              TodoList
            </NavLink>
            <NavLink to="/snake" activeClassName="text-white">
              Snake Game
            </NavLink>
            <NavLink to="/memory-game" activeClassName="text-white">
              Memory Game
            </NavLink>
            <NavLink to="/calculator" activeClassName="text-white">
              Calculator
            </NavLink>
            <NavLink to="/quiz" activeClassName="text-white">
              Quiz
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

const NavLink = ({ to, activeClassName, children }) => {
  const isActive = window.location.pathname === to;

  return (
    <a
      href={to}
      className={`text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium ${
        isActive ? activeClassName : 'text-blue-100'
      }`}
    >
      {children}
    </a>
  );
};

export default Navbar;
