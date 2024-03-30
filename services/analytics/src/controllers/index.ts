import { Response, Request, NextFunction } from "express";

export const abort = (req: Request, res: Response, next: NextFunction) => {
  res.status(403).json({ message: "Forbidden" });
};
