import React, { useEffect, useState } from 'react';
import shuffleArray from '.././components/Quiz/Shuffle';

const Quiz = () => {
  const [quizData, setQuizData] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [quizComplete, setQuizComplete] = useState(false);

  useEffect(() => {
    fetchQuizData();
  }, []);

  const fetchQuizData = async () => {
    try {
      const response = await fetch('https://opentdb.com/api.php?amount=10&type=multiple');
      const data = await response.json();
      setQuizData(data.results);
    } catch (error) {
      console.error('Error fetching quiz data:', error);
    }
  };

  const handleAnswerSelect = (answer) => {
    setSelectedAnswer(answer);
  };

  const handleNextQuestion = () => {
    if (selectedAnswer === quizData[currentQuestion].correct_answer) {
      setScore(score + 1);
    }

    setSelectedAnswer(null);
    setCurrentQuestion(currentQuestion + 1);

    if (currentQuestion === quizData.length - 1) {
      setQuizComplete(true);
    }
  };

  const handleRestartQuiz = () => {
    setQuizData(null);
    setCurrentQuestion(0);
    setScore(0);
    setSelectedAnswer(null);
    setQuizComplete(false);
    fetchQuizData();
  };

  if (!quizData) {
    return <div className='flex basis[100%] justify-center items-center uppercase text-white'>Loading...</div>;
  }

  if (quizComplete) {
    return (
      <div className="max-w-xl mx-auto mt-10 p-4">
        <h2 className="text-2xl font-bold mb-4 text-white">Quiz Complete!</h2>
        <p className="mb-4 text-white">Your Score: {score} / {quizData.length}</p>
        <button className="bg-blue-500 text-white py-2 px-4 rounded " onClick={handleRestartQuiz}>Restart Quiz</button>
      </div>
    );
  }

  const currentQuestionData = quizData[currentQuestion];
  const answers = [...currentQuestionData.incorrect_answers, currentQuestionData.correct_answer];
  const shuffledAnswers = shuffleArray(answers);

  return (
    <div className="max-w-xl mx-auto mt-10 p-4">
      <h2 className="text-2xl font-bold mb-4 text-white">Quiz</h2>
      <p className="mb-4 text-white">Question {currentQuestion + 1} of {quizData.length}</p>
      <h3 className="text-lg font-medium mb-2 text-white">{currentQuestionData.question}</h3>
      <div className="flex flex-col space-y-2">
        {shuffledAnswers.map((answer, index) => (
          <button
            key={index}
            className={`bg-white border border-gray-300 py-2 px-4 rounded hover:bg-slate-300 ${selectedAnswer === answer ? 'bg-blue-500 text-white' : ''}`}
            onClick={() => handleAnswerSelect(answer)}
          >
            {answer}
          </button>
        ))}
      </div>
      <button
        className={`bg-blue-500 text-white py-2 px-4 rounded mt-4 ${!selectedAnswer ? 'cursor-not-allowed opacity-50' : ''}`}
        onClick={handleNextQuestion}
        disabled={!selectedAnswer}
      >
        Next Question
      </button>
    </div>
  );
};



export default Quiz;
