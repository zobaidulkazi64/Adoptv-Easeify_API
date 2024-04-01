import { Console } from "console";
import { Request, Response, NextFunction } from "express";
import z from "zod";
import prisma from "../prisma";

const createUserSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string().min(6),
});

const createUser =
  () => async (req: Request, res: Response, next: NextFunction) => {
    // validate request body
    const parseBody = createUserSchema.safeParse(req.body);

    if (!parseBody.success) {
      return res.status(400).json({
        message: "Invalid request body",
        error: parseBody.error,
      });
    }

    // create user
    const user = await prisma.user.create({
      data: parseBody.data,
    });

    return res.status(201).json(user);
  };

export default createUser;
