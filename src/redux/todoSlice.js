import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const todoSlice = createSlice({
    name: 'todos',
    initialState: {
        items: [],
    },
    reducers: {
        addTodo: {
            reducer(state, action) {
                state.items.push(action.payload)
            },
            prepare(text) {
                return {
                    payload: {
                        text,
                        id: nanoid()
                    }
                }
            }
        },
        deleteTodo(state, action) { },
    }
})

export const { addTodo, deleteTodo } = todoSlice.actions;
export const todoReducer = todoSlice.reducer;