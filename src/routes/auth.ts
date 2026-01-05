import express from "express";
import { registerController } from "../controllers/authController";

const auth = express.Router();

auth.post("/register", registerController);

export default auth;
