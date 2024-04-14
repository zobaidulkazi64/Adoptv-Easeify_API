import { Request, Response, NextFunction } from "express";

const sendNoti = (req: Request, res: Response, next: NextFunction) => {
  res.send("Notification service is up and running!");
};

export default { sendNoti };
