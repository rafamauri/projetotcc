const express = require("express");
const EventosController = require("../controllers/eventosController");

const eventosRoute = express.Router();

eventosRoute.get("/", EventosController.getEventos);

module.exports = eventosRoute;
