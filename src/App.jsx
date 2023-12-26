import { useState } from 'react'
import './App.css'
import Todo from './components/Todo'
import AddTodo from './components/AddTodo'

function App() {
  return (
    <>
      <h1 className='flex justify-center mt-7 font-bold text-slate-500'>TODO App</h1>
      <AddTodo />
      <Todo />
    </>
  )
}

export default App
