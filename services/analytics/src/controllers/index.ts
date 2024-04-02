import { Response, Request, NextFunction } from "express";

export const abort = (req: Request, res: Response, next: NextFunction) => {
  res.status(403).json({ message: "Forbidden" });
};

export const notFound = (req: Request, res: Response, next: NextFunction) => {
  res.status(404).json({ message: "Not Found" });
};

export const errorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.status(500).json({ message: "Internal Server Error" });
};
