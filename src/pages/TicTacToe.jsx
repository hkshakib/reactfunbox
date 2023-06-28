import React, { useState } from 'react';
import Board from '../components/TicTacToe/Board';
import Announce from '../components/TicTacToe/Announce';

const TicTacToe = () => {
    const [winner, setWinner] = useState(null);

    const handleWinner = (player) => {
      setWinner(player);
    };

    const handlePlayAgain = () => {
      window.location.reload();
    }
  
    return (
      <div className='flex flex-col basis-[100%] justify-center items-center'>
        <div className='flex text-white uppercase'>Play Your Favourite Tic Tac Toe</div>
        <div className="flex flex-col">
          <Board onWinner={handleWinner} />
          
          {winner && <Announce winner={winner} />}

          <button onClick={handlePlayAgain} className='text-2xl font-bold text-white mt-[40px] border border-white h-[50px] hover:text-black hover:bg-white'>Play Again</button>
        </div>
      </div>
    );
};

export default TicTacToe;