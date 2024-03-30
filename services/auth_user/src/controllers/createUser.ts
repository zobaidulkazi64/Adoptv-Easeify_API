import { Request, Response, NextFunction } from "express";
import { PrismaClient } from "@prisma/client";
import z from "zod";

const createUserSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string(),
});

export const createUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { name, email, password } = req.body;
    const user = await req.createUserSchema.create({
      data: {
        name,
        email,
        password,
      },
    });
    res.status(201).json({ user });
  } catch (error) {
    next(error);
  }
};
