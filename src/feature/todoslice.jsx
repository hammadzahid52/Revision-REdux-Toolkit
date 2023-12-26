import { createSlice, nanoid} from "@reduxjs/toolkit";
import { useState } from "react";
const initialState = {
    todos : [],
};

export const todoSlice = createSlice({
    
    name : 'todo',
    initialState,
    reducers : {
        addTodo : (state, action)=>{
            const todo = {
                id : nanoid(),
                text : action.payload,
                counter : 0
            };
            state.todos.push(todo);
        },
        removeTodo : (state, action)=>{
            state.todos = state.todos.filter((todo)=>
            todo.id !== action.payload);
        },
        updateTodo : (state, action)=>{
            state.todos = state.todos.map((todo)=>{
                if(todo.id === action.payload.id){
                    return {
                        ...todo,
                        text : action.payload.text,
                    };
                }
                return todo;
            });
        },
        add: (state, action) => {
            const todo = state.todos.find((t) => t.id === action.payload);
            if (todo) {
              todo.counter += 1;
            }
          },
          sub: (state, action) => {
            const todo = state.todos.find((t) => t.id === action.payload);
            if (todo && todo.counter > 0) {
              todo.counter -= 1;
            }
        },
    }, 
});

export const { addTodo, removeTodo, updateTodo, add, sub } = todoSlice.actions;
export default todoSlice.reducer;
