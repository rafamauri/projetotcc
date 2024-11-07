const express = require("express");
const PagesController = require("../controllers/admin/pagesController");

const pagesRoute = express.Router();

pagesRoute.get("/", PagesController.getPages);

module.exports = pagesRoute;
