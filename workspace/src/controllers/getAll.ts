import { z } from "zod";
import { NextFunction, Response, Request } from "express";

const getAll = async (req: Request, res: Response, next: NextFunction) => {
  try {
    res.status(200).json({ message: "Pet listing service is up and running!" });
  } catch (error) {
    console.log(error);
  }
};

const getAllByStatus = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    res.status(200).json({ message: "Pet listing service is up and running!" });
  } catch (error) {
    console.log(error);
  }
};

const notFound = (req: Request, res: Response, next: NextFunction) => {
  res.status(404).json({ message: "Not Found" });
};
