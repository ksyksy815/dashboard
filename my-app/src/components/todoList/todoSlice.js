import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { fetchTodo } from './todoAPI'

const initialState = {

}

export const getTodos = createAsyncThunk(
  'todo/fetchTodo',
  async () => {
    const response = await fetchTodo();
    return response.data;
  }
);

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    create: (state, action) => {

    },
    delete: (state, action) => {

    },
    patch: (state, action) => {

    },
    changeOrder: (state, action) => {

    }
  }
})

export default todoSlice.reducer