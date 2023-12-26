import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../feature/todoslice'

function AddTodo() {
    const [input, setinput] = useState('');
    const dispatch = useDispatch();

    const addTodoHandler = (e)=>{
        e.preventDefault();
        dispatch(addTodo(input));
        setinput('');
    }
  return (
    <form
    onSubmit={addTodoHandler}
    className='space-x-3 mt-12'
    >
    <input type="text"
    className='bg-gray-800 rounded border border-gray-700 text-gray-100
    py-1 px-4 w-[400px] leading-8 transition-colors duration-200 ease-in-out'
    placeholder='Add Todo'
    value={input}
    onChange={(e)=>setinput(e.target.value)}/>
    <button type='submit'
    className='text-white bg-indigo-500 border-0 py-2 px-6 focue:outline-none hover:bg-indigo-600 rounded text-lg'
    >
        Add Todo
    </button>
    </form>
  )
}

export default AddTodo