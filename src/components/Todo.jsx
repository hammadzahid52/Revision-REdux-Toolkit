import React from 'react'
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo } from '../feature/todoslice';
import {updateTodo} from '../feature/todoslice';
import {add, sub} from '../feature/todoslice';
function Todo() {
   const todos =  useSelector(state => state.todos);
   const counter = useSelector(state => state.counter);
//    const [counter, Setcounter] = useState(0);
   const dispatch = useDispatch();
   
  return (
    <>
        <ul className="list-none">
        {todos.map((todo) => (
          <li
            className="mt-5 flex justify-between items-center bg-zinc-800 px-2 py-2 rounded"
            key={todo.id}
          >
            <div className='text-white'>{todo.text}</div>
            <div className='flex'>
                <button onClick={() => dispatch(add(todo.id))}>+</button>
                <div className='text-white font-bold text-xl p-2'>{todo.counter}</div>
                <button onClick={() => dispatch(sub(todo.id))}>-</button>
            </div>
            <div className='flex space-x-1'>
            <button
             onClick={() => dispatch(removeTodo(todo.id))}
              className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
            >
                Delete
            </button>
            <button
              onClick={() => dispatch(updateTodo({
                  id : todo.id,
                  text : prompt('Enter new text', todo.text),
              }))}
              className="text-white bg-green-500 border-0 py-1 px-4 focus:outline-none hover:bg-green-600 rounded text-md"
              >updateTodo</button>
            </div>
          </li>
        ))}
      </ul>
    </>
  )
}

export default Todo