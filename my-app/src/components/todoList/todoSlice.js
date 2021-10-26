import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  todos: [],
  newTodo: ''
}

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    add: (state, action) => {
      state.newTodo = action.payload
    }
  }
})

export const { add } = todoSlice.actions

export const newTodoContent = (state) => state.todo;