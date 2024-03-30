import { Request, Response, NextFunction } from "express";
import z from "zod";

export async function createUser(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const createUserSchema = z.object({
    name: z.string(),
    email: z.string().email(),
    password: z.string().min(6),
  });
}
