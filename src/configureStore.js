import { configureStore } from "@reduxjs/toolkit";
import TodosReducer from "./components/Todos/todosSlice";
export default configureStore({
  reducer: {
    todos: TodosReducer
  }
});
