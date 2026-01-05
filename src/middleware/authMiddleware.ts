import jwt from "jsonwebtoken";
import { prisma } from "../config/db.js";
import { NextFunction, Request, Response } from "express";
import { User } from "@prisma/client";


export const authMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let token;

  if (
    //* check if user sent token in data itself with bearer
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  } else if (req.cookies?.jwt) {
    //* check if user sent token in headers [standard way]
    token = req.cookies.jwt;
  }

  if (!token) {
    return res.status(401).json({ error: "Not authorized, no token provided" });
  }

  try {
    ///* We can get the userId from the token itself
    //* Verify token and extract the user Id
    const JWT_SECRET = process.env.JWT_SECRET;
    if (!JWT_SECRET) {
      throw new Error("JWT_SECRET is not defined");
    }
    const userDecodedBack = jwt.verify(token, JWT_SECRET) as User;

    const foundUser = await prisma.user.findUnique({
      where: { id: userDecodedBack.id },
    });

    if (!foundUser) {
      return res.status(401).json({ error: "User no longer exists" });
    }

    //* so we have verified user now
    //* let the process continue to controllers

    next();
  } catch (err) {
    return res.status(401).json({ error: "Not authorized, token failed" });
  }
};
