import React, { useState } from 'react';

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
              <span className="text-white font-bold text-xl">FUN BOX</span>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <NavLink to="/" activeClassName="text-white">
                  Home
                </NavLink>
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
          <div className="md:hidden">
            <button
              type="button"
              className="text-white hover:text-gray-300 focus:outline-none focus:text-gray-300"
              onClick={toggleMenu}
            >
              <svg
                className="h-6 w-6 fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {menuOpen ? (
                  <path
                    className="fill-current text-white"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    className="fill-current text-white"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
        <div
          className={`md:hidden ${menuOpen ? 'block' : 'hidden'}`}
          id="mobile-menu"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <NavLink to="/" activeClassName="text-white">
              Home
            </NavLink>
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
      className={`text-black hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium ${
        isActive ? activeClassName : ''
      }`}
    >
      {children}
    </a>
  );
};

export default Navbar;
