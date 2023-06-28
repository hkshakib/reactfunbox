import React, { useState, useEffect } from 'react';
import { FaCheck } from 'react-icons/fa';

const LOCAL_STORAGE_KEY = "todos";

function ToDoList() {
  const [newTodo, setNewTodo] = useState("");

  const [todos, setTodos] = useState(() => {
    return JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || []
  });

  const [editMode, setEditMode] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    const storedTodos = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  const addTodo = () => {
    if (newTodo.trim() !== '') {
      if (editMode) {
        const updatedTodos = [...todos];
        updatedTodos[editIndex] = newTodo;
        setTodos(updatedTodos);
        setNewTodo('');
        setEditMode(false);
        setEditIndex(null);
      } else {
        setTodos([...todos, newTodo]);
        setNewTodo('');
      }
    }
  };

  const removeTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  };

  const editTodo = (index) => {
    setNewTodo(todos[index]);
    setEditMode(true);
    setEditIndex(index);
  };

  const markAsDone = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index] = updatedTodos[index] + ' (Done)';
    setTodos(updatedTodos);
  };

  const handleChange = (e) => {
    setNewTodo(e.target.value);
  };

  return (
    <div className='flex basis-[100%] flex-col items-center'>

      <div className='flex basis-[10%] uppercase text-white mt-16'> Create your to-do list</div>
      <div className='flex basis-[90%] flex-col '>

        <div className='flex'>
          <input
            type='text'
            value={newTodo}
            onChange={handleChange}
            placeholder='Add Your Work'
            className='flex w-[200px] h-[20px] md:w-[500px] md:h-[50px] p-4 rounded'
          />
          <button onClick={addTodo} className='ml-2 border border-white w-[100px] rounded text-white hover:bg-slate-500 hover:text-black'>
            {editMode ? 'Update' : 'Add'}
          </button>
        </div>

        <div className='flex'>
          <ul>
            {todos.map((todo, index) => (
              <li key={index} className='flex'>
                <div className='flex border border-white mt-[10px] items-center justify-center w-[250px] h-[70px] md:w-[500px] p-2'>
                  {todo.includes('(Done)') ? (
                    <FaCheck className='mr-2 text-green-500' />
                  ) : null}
                  <div className={`flex flex-1 text-white text-[10px] md:text-[16px] ${todo.includes('(Done)') ? 'line-through' : ''}`}>
                    {index + 1}. {todo.replace(' (Done)','')}
                  </div>
                  <button
                    className='flex justify-center items-center text-[10px] md:text-[14px] h-[15px] md:h-[30px] uppercase ml-1 md:ml-8 mt-2 border border-white w-[50px] md:w-[100px] rounded text-white hover:bg-red-200 hover:text-black'
                    onClick={() => editTodo(index)}
                  >
                    Edit
                  </button>
                  <button
                    className='flex justify-center items-center text-[10px] md:text-[14px] h-[15px] md:h-[30px] uppercase ml-1 md:ml-8 mt-2 border border-white w-[50px] md:w-[100px] rounded text-white hover:bg-red-500 hover:text-white'
                    onClick={() => removeTodo(index)}
                  >
                    Delete
                  </button>
                  {!todo.includes('(Done)') && (
                    <button
                      className='flex justify-center items-center text-[10px] md:text-[14px] h-[15px] md:h-[30px] uppercase ml-1 md:ml-8 mt-2 border border-white w-[50px] md:w-[100px] rounded text-white hover:bg-green-500 hover:text-white'
                      onClick={() => markAsDone(index)}
                    >
                      Done
                    </button>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>

      </div>

    </div>
  );
}

export default ToDoList;
