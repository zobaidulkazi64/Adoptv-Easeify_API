console.log("controllers/app");

import express from "express";
const routes = express.Router();

routes.get("/", (_req, res) => {
  res.status(200).json({ status: "UP" });
});

routes.get("/applyPet", applyPet);

routes.post("/applyPet", applyPet);
routes.delete("/applyPet/:id", applyPet);

const applyPet = require("./applyPet");

module.exports = routes;
