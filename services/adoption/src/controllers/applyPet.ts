import { Request, Response, NextFunction } from "express";

export const applyPet = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const parsBody = req.body;

  console.log(parsBody, "applyPet");
};
