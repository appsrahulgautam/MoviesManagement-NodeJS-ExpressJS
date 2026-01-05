import express from "express";
import {
  loginController,
  logoutController,
  registerController,
} from "../controllers/authController";

const auth = express.Router();

auth.post("/register", registerController);

auth.post("/login", loginController);

auth.post("/logout", logoutController);

export default auth;
