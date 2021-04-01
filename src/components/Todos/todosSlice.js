import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getTodos = createAsyncThunk("todos/getTodos", async ({ id }) => {
  return fetch(
    `https://jsonplaceholder.typicode.com/todos/${id}`
  ).then((response) => response.json());
});

const slice = createSlice({
  name: "todos",

  initialState: {
    name: "test",

    todosList: "",

    status: null
  },

  reducers: {
    removeTodo: (state) => console.log(state.list[1])
  },

  extraReducers: {
    [getTodos.pending]: (state) => {
      state.status = "loading...";

      console.log(state.status);
    },

    [getTodos.fulfilled]: (state, action) => {
      state.status = "success";

      state.todosList = action.payload;

      console.log(state.todosList);
    },

    [getTodos.rejected]: (state) => {
      state.status = "rejected";

      console.log(state.status);
    }
  }
});

const { actions, reducer } = slice;

export const { removeTodo } = actions;

export default reducer;
