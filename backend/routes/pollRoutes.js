import express from "express";

import isLoggedIn from "./../middlewares/isLoggedin.js";
import {
  createPollCtrl,
  deletePollCtrl,
  editPollCtrl,
  getPollCtrl,
  linksCtrl,
  submitResponseCtrl,
} from "../controllers/pollController.js";
const pollRoutes = express.Router();

pollRoutes.get("/:id", getPollCtrl);
pollRoutes.post("/", isLoggedIn, createPollCtrl);
pollRoutes.post("/edit", isLoggedIn, editPollCtrl);
pollRoutes.post("/links", isLoggedIn, linksCtrl);
pollRoutes.post("/submitResponse", submitResponseCtrl);
pollRoutes.post("/delete", isLoggedIn, deletePollCtrl);

export default pollRoutes;
