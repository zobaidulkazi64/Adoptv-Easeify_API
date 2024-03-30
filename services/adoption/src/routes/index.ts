import express from "express";
const routes = express.Router();
import applyPet from "../controllers/applyPet";

routes.get("/", applyPet);

export default routes;
