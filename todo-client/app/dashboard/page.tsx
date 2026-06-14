"use client";

import { useEffect, useState } from "react";
import axios from "axios";

interface Todo {
  _id: string;
  title: string;
  completed: boolean;
}

export default function Dashboard() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [title, setTitle] = useState("");

  const token =
    typeof window !== "undefined"
      ? localStorage.getItem("token")
      : null;

  const fetchTodos = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/todos",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setTodos(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const addTodo = async () => {
    try {
      await axios.post(
        "http://localhost:5000/api/todos",
        { title },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setTitle("");
      fetchTodos();
    } catch (error) {
      console.error(error);
    }
  };

  const deleteTodo = async (id: string) => {
    try {
      await axios.delete(
        `http://localhost:5000/api/todos/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      fetchTodos();
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div className="mx-auto max-w-2xl p-8">
      <h1 className="mb-6 text-3xl font-bold">
        Todo Dashboard
      </h1>

      <div className="mb-6 flex gap-2">
        <input
          type="text"
          placeholder="Add Todo"
          className="flex-1 rounded border p-3"
          value={title}
          onChange={(e) =>
            setTitle(e.target.value)
          }
        />

        <button
          onClick={addTodo}
          className="rounded bg-blue-600 px-4 text-white"
        >
          Add
        </button>
      </div>
      <button
  onClick={() => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  }}
  className="rounded bg-red-600 px-4 py-2 text-white"
>
  Logout
</button>

      <div className="space-y-3">
        {todos.map((todo) => (
          <div
            key={todo._id}
            className="flex items-center justify-between rounded border p-4"
          >
            <span>
              {todo.title}
            </span>

            <button
              onClick={() =>
                deleteTodo(todo._id)
              }
              className="rounded bg-red-500 px-3 py-1 text-white"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}