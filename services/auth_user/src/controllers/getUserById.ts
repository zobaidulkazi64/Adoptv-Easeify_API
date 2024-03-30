import { Request, Response, NextFunction } from "express";
import z from "zod";

export async function getUserById(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const getUserByIdSchema = z.object({
    id: z.string().cuid(),
  });
}
