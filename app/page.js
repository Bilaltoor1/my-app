import React from 'react'
import TodoList from './components/todolist';
import PathAnimation from './components/PathAnimation';

const items = [
  { id: 1, title: 'Title 1', subtitle: 'Subtitle 1' },
  { id: 2, title: 'Title 2', subtitle: 'Subtitle 2' },
  { id: 3, title: 'Title 3', subtitle: 'Subtitle 3' },
];

const page = () => {
  return (
    <div>
      <TodoList/>
      <h1 className='text-4xl font-bold'>Home</h1>
      <p className='mt-4 text-lg'>This is a simple page created using React and Tailwind CSS.</p>
      <div className='h-screen bg-green-300'>
          content 1
      </div>
      <div className='h-screen bg-rose-300'>
          content 1
      </div>
      <div className='h-screen bg-teal-300'>
          content 1
      </div>
      <PathAnimation/>
    </div>
  )
}

export default page