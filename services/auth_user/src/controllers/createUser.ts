import { Request, Response, NextFunction } from "express";
import z from "zod";

const createUserSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string().min(6),
});

export async function createUser(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const paresBody = createUserSchema.parseAsync(req.body);

    console.log(paresBody);
  } catch (error) {
    next(error);
    console.log(error);
  }
}
