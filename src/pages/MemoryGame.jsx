import React, { useState, useEffect } from 'react';
import shuffleArray from '.././components/MemoryGame/Shuffle';

const images = [
  require('.././static/MemoryGame/image1.jpeg'),
  require('.././static/MemoryGame/image2.jpeg'),
  require('.././static/MemoryGame/image3.jpeg'),
  require('.././static/MemoryGame/image4.jpeg'),
  require('.././static/MemoryGame/image5.jpeg'),
  require('.././static/MemoryGame/image6.jpeg'),
  require('.././static/MemoryGame/image7.jpeg'),
  require('.././static/MemoryGame/image8.jpeg'),
];

const MemoryGame = () => {
  const [cards, setCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [gameComplete, setGameComplete] = useState(false);

  useEffect(() => {
    generateCards();
  }, []);

  const generateCards = () => {
    const cardsArray = images.concat(images);
    const shuffledCards = shuffleArray(cardsArray);
    setCards(shuffledCards);
  };

  const flipCard = (index) => {
    if (flippedCards.length < 2 && !flippedCards.includes(index)) {
      setFlippedCards((prevFlippedCards) => [...prevFlippedCards, index]);
    }
  };

  useEffect(() => {
    if (flippedCards.length === 2) {
      const [cardIndex1, cardIndex2] = flippedCards;
      const card1 = cards[cardIndex1];
      const card2 = cards[cardIndex2];

      if (card1 === card2) {
        setFlippedCards([]);
        setGameComplete((prevGameComplete) => prevGameComplete || (cards.length === 2));
      } else {
        setTimeout(() => {
          setFlippedCards([]);
        }, 1000);
      }
    }
    // eslint-disable-next-line 
  }, [flippedCards]);

  const handleRestartGame = () => {
    setCards([]);
    setFlippedCards([]);
    setGameComplete(false);
    generateCards();
  };

  return (
    <div className='flex basis-[100%] justify-center items-center'>
        <div className="flex ">

          <div className='flex flex-col max-w-xl mx-auto mt-10 p-4 justify-center items-center  '>
          <h2 className="text-2xl font-bold mb-4 text-white">MEMORY GAME</h2>
            {gameComplete ? (
                <div>
                  <h3 className="text-lg font-medium mb-2">Congratulations! You completed the game.</h3>
                  <button className="bg-blue-500 text-white py-2 px-4 rounded" onClick={handleRestartGame}>
                    Restart Game
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-4 gap-4 border border-white w-[50vw] h-[60vh]">
                  {cards.map((card, index) => (
                    <div
                      key={index}
                      className={`bg-gray-200 border border-gray-400 p-4 text-center ${
                        flippedCards.includes(index) ? 'bg-blue-500 text-white' : ''
                      }`}
                      onClick={() => flipCard(index)}
                    >
                      {flippedCards.includes(index) || gameComplete ? (
                        <img src={card} alt={`Card ${index}`} />
                      ) : (
                        'Click to reveal'
                      )}
                    </div>
                  ))}
                </div>
              )}

          </div>
          <div className='flex flex-col basis-[40%] mt-2 mr-[10px] flex-wrap border border-white p-8'>
            <h1 className='uppercase text-white mt-2'>Instruction</h1>
            <span className='flex flex-col uppercase text-white text-[13px]'>
                <p>1. The game board consists of a grid of cards, which are initially faced down.</p>
                <p>2. Click on any card to reveal its image.</p>
                <p>3. Try to remember the position and image of the card.</p>
                <p>4. Now, click on another card to reveal its image.</p>
                <p>5. If the two cards have the same image, they will remain face-up, and you have successfully matched a pair.</p>
                <p>6. If the two cards have different images, they will be flipped face-down again.</p>
                <p>7. Continue flipping cards and trying to match pairs until all cards are face-up.</p>
                <p>8. The game is complete when all cards are matched.</p>
                <p>9. If you successfully complete the game, a "Congratulations!" message will be displayed, and you can click the "Restart Game" button to play again.</p>
                <p>The objective of the game is to remember the positions and images of the cards and make matches by flipping them over. 
                The fewer flips you make, the better your memory skills are considered.
                Enjoy playing the Memory Game!</p>
            </span>
          </div>
        </div>
    </div>
  );
};

export default MemoryGame;
