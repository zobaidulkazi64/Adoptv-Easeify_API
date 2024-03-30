import { Request, Response, NextFunction } from "express";

const controller = (req: Request, res: Response, next: NextFunction) => {
  res.send("Notification service is up and running!");
};
