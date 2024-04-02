import { Request, Response, NextFunction } from "express";

export const ab = (req: Request, res: Response, next: NextFunction) => {
  res.status(403).json({ message: "Forbidden" });
};
