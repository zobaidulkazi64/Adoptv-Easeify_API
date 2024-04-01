import express from "express";
const routes = express.Router();
import { createUser } from "../controllers";

routes.post("/create", createUser);

export default routes;
