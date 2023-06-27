import React from 'react';

const Square = ({ value, onClick }) => (
  <button
    className="bg-white hover:bg-blue-400 text-black font-bold py-2 px-4 rounded h-[100px] w-[100px]"
    onClick={onClick}
  >
    {value}
  </button>
);

export default Square;
