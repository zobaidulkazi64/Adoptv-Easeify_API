import { Request, Response, NextFunction } from "express";

const applyPet = (req: Request, res: Response, next: NextFunction) => {};

export default applyPet;

const notFound = (req: Request, res: Response, next: NextFunction) => {
  res.status(404).json({ message: "Not Found" });
};

const errorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.status(500).json({ message: "Internal Server Error" });
};
