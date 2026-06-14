import { createSlice } from "@reduxjs/toolkit";

interface Todo {
  _id: string;
  title: string;
  completed: boolean;
}

interface TodoState {
  todos: Todo[];
}

const initialState: TodoState = {
  todos: [],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    setTodos: (state, action) => {
      state.todos = action.payload;
    },

    addTodo: (state, action) => {
      state.todos.push(action.payload);
    },

    removeTodo: (state, action) => {
      state.todos = state.todos.filter(
        (todo) => todo._id !== action.payload
      );
    },

    updateTodo: (state, action) => {
      const index = state.todos.findIndex(
        (todo) => todo._id === action.payload._id
      );

      if (index !== -1) {
        state.todos[index] = action.payload;
      }
    },
  },
});

export const {
  setTodos,
  addTodo,
  removeTodo,
  updateTodo,
} = todoSlice.actions;

export default todoSlice.reducer;