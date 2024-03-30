import express from "express";
const routes = express.Router();

const applyPet = require("./applyPet");

console.log(applyPet, "routes");

routes.post("/applyPet", applyPet);

module.exports = routes;
