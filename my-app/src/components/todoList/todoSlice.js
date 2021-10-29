import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { fetchTodos } from './todoAPI'

const initialState = {
  todos: [],
  newTodo: ''
}

export const todoAsync = createAsyncThunk(
  'todo/fetchTodos',
  async () => {
    const response = await fetchTodos();
    return response.data;
  }
);

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    add: (state, action) => {
      state.newTodo = action.payload
    },
    load: async (state) => {
      const response = await fetchTodos()
      //state.todos = response.data
      console.log(state.todos)
    }
  }
})

export const { add, load } = todoSlice.actions

export const selectTodos = (state) => state.todo.todos
export const selectNewTodo = (state) => state.todo.newTodo

export default todoSlice.reducer;