import React, { useState, useEffect } from 'react';
import Square from './Square';

const Board = ({ onWinner }) => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState('X');
  const [isGameOver, setIsGameOver] = useState(false);

  useEffect(() => {
    const checkWinner = () => {
      const winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
      ];

      for (let combination of winningCombinations) {
        const [a, b, c] = combination;
        if (
          board[a] &&
          board[a] === board[b] &&
          board[a] === board[c]
        ) {
          setIsGameOver(true);
          onWinner(board[a]);
          return;
        }
      }

      if (!board.includes(null)) {
        setIsGameOver(true);
        onWinner(null);
      }
    };

    checkWinner();
  }, [board, onWinner]);

  const handleSquareClick = (index) => {
    if (board[index] || isGameOver) return;

    const newBoard = [...board];
    newBoard[index] = currentPlayer;
    setBoard(newBoard);
    setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
  };

  const renderSquare = (index) => (
    <Square
      value={board[index]}
      onClick={() => handleSquareClick(index)}
    />
  );

  return (
    <div className="flex flex-col items-center">
      <div className="grid grid-cols-3 gap-4 mt-8">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="grid grid-cols-3 gap-4 mt-4">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="grid grid-cols-3 gap-4 mt-4">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
};

export default Board;
