import { createSlice } from "@reduxjs/toolkit";

const initialState = []

const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            //const id = state.length + 1
            const newTodo = {
                id: action.payload.id,
                task: action.payload.task,
                done: action.payload.done,  
            }
            state.push(newTodo);
        },
        removeTodo: (state, action) => {
            return state.filter(item => item.id !== action.payload.id)
        },
        changeTaskDone: (state, action) => {
            const todo = state.find((todo) => todo.id === action.payload.id);
            if (todo) {
              todo.done = !todo.done;
            }
          },          
    }
})

export const { addTodo, removeTodo, changeTaskDone } = todoSlice.actions;
export default todoSlice.reducer;