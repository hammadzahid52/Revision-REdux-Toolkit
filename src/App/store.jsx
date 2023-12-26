import {configureStore} from "@reduxjs/toolkit";
import todoReducer from "../feature/todoslice";

export const store = configureStore({
    reducer : todoReducer,
});