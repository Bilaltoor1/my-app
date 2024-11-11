'use client'
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const TodoList = () => {
  const [selectedId, setSelectedId] = useState(null);
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React' },
    { id: 2, text: 'Learn Framer Motion' },
    { id: 3, text: 'Build a cool app' },
  ]);

  const removeTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div>
      <h1>Todo List</h1>
      <AnimatePresence>
        {todos.map(todo => (
          <motion.div
            key={todo.id}
            initial={{ opacity: 0 }}
            onClick={() => setSelectedId(todo.id)}
            animate={{ opacity: 1 }}
            exit={{ x: '-100%', opacity: 0 }}
            className="bg-gray-300 rounded-lg p-4 m-4 text-black"
          >
            <p>{todo.text}</p>
            <button onClick={() => removeTodo(todo.id)}>Remove</button>
          </motion.div>
        ))}
      </AnimatePresence>
      <AnimatePresence>
        {selectedId && (
          <motion.div
            layoutId={selectedId}
            className='bg-gray-300 rounded-lg p-4  text-black bg-opacity-50 fixed inset-0'
          >
            <button onClick={() => setSelectedId(null)}>Close</button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default TodoList;