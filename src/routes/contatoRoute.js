const express = require("express");

const contatoRoute = express.Router();

contatoRoute.get("/");

module.exports = contatoRoute;
