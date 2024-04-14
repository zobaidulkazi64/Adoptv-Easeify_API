import { Request, Response, NextFunction } from "express";

const controller = (req: Request, res: Response, next: NextFunction) => {
  res.send("Notification service is up and running!");
};

const controller2 = (req: Request, res: Response, next: NextFunction) => {
  res.send("Notification service is up and running!");
};

export default { controller, controller2 };
