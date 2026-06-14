import { Request, Response } from "express";
import Todo from "../models/Todo";

interface AuthRequest extends Request {
  user?: {
    id: string;
  };
}

// Create Todo
export const createTodo = async (
  req: AuthRequest,
  res: Response
) => {
  try {
    const todo = await Todo.create({
      title: req.body.title,
      user: req.user?.id,
    });

    res.status(201).json(todo);
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
    });
  }
};

// Get All Todos
export const getTodos = async (
  req: AuthRequest,
  res: Response
) => {
  try {
    const todos = await Todo.find({
      user: req.user?.id,
    });

    res.status(200).json(todos);
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
    });
  }
};

// Update Todo
export const updateTodo = async (
  req: AuthRequest,
  res: Response
) => {
  try {
    const todo = await Todo.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.status(200).json(todo);
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
    });
  }
};

// Delete Todo
export const deleteTodo = async (
  req: AuthRequest,
  res: Response
) => {
  try {
    await Todo.findByIdAndDelete(req.params.id);

    res.status(200).json({
      message: "Todo deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
    });
  }
};