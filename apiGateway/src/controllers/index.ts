import { Request, Response, NextFunction } from "express";

export const createUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    next(error);
  }
};
