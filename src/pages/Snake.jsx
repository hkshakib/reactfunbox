import React, { useState, useEffect, useRef } from 'react';
import { useInterval } from '.././CustomHooks/useInterval';

const ROWS = 20;
const COLS = 20;
const INITIAL_SPEED = 200;

const SnakeGame = () => {
  const [snake, setSnake] = useState([{ x: 10, y: 10 }]);
  const [food, setFood] = useState(getRandomFoodPosition());
  const [direction, setDirection] = useState('right');
  const [speed, setSpeed] = useState(INITIAL_SPEED);
  const [gameOver, setGameOver] = useState(false);
  const gameContainerRef = useRef(null);

  useEffect(() => {
    gameContainerRef.current.focus();
  }, []);

  useInterval(() => {
    moveSnake();
  }, speed);

  const handleKeyDown = (e) => {
    if (e.keyCode === 38 && direction !== 'down') {
      setDirection('up');
    } else if (e.keyCode === 40 && direction !== 'up') {
      setDirection('down');
    } else if (e.keyCode === 37 && direction !== 'right') {
      setDirection('left');
    } else if (e.keyCode === 39 && direction !== 'left') {
      setDirection('right');
    }
  };

  const moveSnake = () => {
    const head = { ...snake[0] };
    switch (direction) {
      case 'up':
        head.y -= 1;
        break;
      case 'down':
        head.y += 1;
        break;
      case 'left':
        head.x -= 1;
        break;
      case 'right':
        head.x += 1;
        break;
      default:
        break;
    }
    setSnake([head, ...snake.slice(0, -1)]);

    if (isCollision(head) || isOutOfBounds(head)) {
      setGameOver(true);
    }

    if (isFoodEaten(head)) {
      setFood(getRandomFoodPosition());
      setSpeed((prevSpeed) => prevSpeed - 10);
      growSnake();
    }
  };

  const isCollision = (head) => {
    return snake.slice(1).some((segment) => segment.x === head.x && segment.y === head.y);
  };

  const isOutOfBounds = (head) => {
    return head.x < 0 || head.y < 0 || head.x >= COLS || head.y >= ROWS;
  };

  const isFoodEaten = (head) => {
    return head.x === food.x && head.y === food.y;
  };

  const growSnake = () => {
    const newTail = { ...snake[snake.length - 1] };
    snake.push(newTail);
  };

  function getRandomFoodPosition() {
    return {
      x: Math.floor(Math.random() * COLS),
      y: Math.floor(Math.random() * ROWS),
    };
  }

  const renderCell = (row, col) => {
    const isSnake = snake.some((segment) => segment.x === col && segment.y === row);
    const isFood = food.x === col && food.y === row;
    const cellClass = `w-[20px] h-[20px] border border-gray-200 ${
      isSnake ? 'bg-green-700' : ''
    } ${isFood ? 'bg-red-500' : ''}`;
    return <div key={`${row}-${col}`} className={cellClass}></div>;
  };

  const renderBoard = () => {
    const rows = [];
    for (let row = 0; row < ROWS; row++) {
      const cols = [];
      for (let col = 0; col < COLS; col++) {
        cols.push(renderCell(row, col));
      }
      rows.push(
        <div key={row} className="flex text-black">
          {cols}
        </div>
      );
    }
    return rows;
  };

  return (
    <div
      className=" flex basis-[100%] flex-col mt-10 p-4 justify-center items-center outline-none"
      ref={gameContainerRef}
      tabIndex={0} // Enable focus on the game container
      onKeyDown={handleKeyDown} // Attach the event listener to the container
    >
      <h2 className="text-2xl font-bold mb-4 uppercase text-white">Snake Game</h2>
      <div className="border border-gray-400 p-2">
        {gameOver ? (
          <div className="text-center">
            <h3 className="text-lg font-medium mb-2 uppercase text-white">Game Over!</h3>
            <button
              className="bg-blue-500 text-white py-2 px-4 rounded"
              onClick={() => window.location.reload()}
            >
              Restart Game
            </button>
          </div>
        ) : (
          renderBoard()
        )}
      </div>
    </div>
  );
};

export default SnakeGame;
