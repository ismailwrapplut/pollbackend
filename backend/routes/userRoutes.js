import express from "express";
import {
  loginUserCtrl,
  registerUserCtrl,
} from "../controllers/userController.js";
import isLoggedIn from "../middlewares/isLoggedin.js";
import savePoll from "../model/savePoll.js";
const userRoutes = express.Router();

userRoutes.post("/register", registerUserCtrl);
userRoutes.post("/login", loginUserCtrl);
userRoutes.get("/polls", isLoggedIn, async (req, res) => {
  const poll = await savePoll.find({ creator: req.userAuthId.toString() });
  res.send({ poll });
});

export default userRoutes;
