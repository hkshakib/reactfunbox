import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './pages/Home'
import TicTacToe from "./pages/TicTacToe";
import Snake from "./pages/Snake";
import Calculator from "./pages/Calculator";
import ToDoList from "./pages/ToDoList";
import Quiz from "./pages/Quiz";
import MemoryGame from "./pages/MemoryGame";

const App = () => {
  return (
    <Router>
      <div className="flex bg-slate-700 h-[100vh] justify-center items-center font-mono">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/tic-tac-toe" element={<TicTacToe/>} />
          <Route path="/snake" element={<Snake/>} />
          <Route path="/calculator" element={<Calculator/>} />
          <Route path="/to-do" element={<ToDoList/>} />
          <Route path="/quiz" element={<Quiz/>} />
          <Route path="/memory-game" element={<MemoryGame/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
