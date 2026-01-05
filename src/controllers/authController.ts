import { Request, Response } from "express";
import { prisma } from "../config/db";
import { HTTP_STATUS } from "../utils/httpstatus";
import bcrypt from "bcryptjs";
import { generateJwtToken } from "../utils/utils";

const registerController = async (req: Request, res: Response) => {
  const { name, email, password } = req.body;

  const userExists = await prisma.user.findUnique({
    where: { email: email },
  });

  if (userExists) {
    return res.status(HTTP_STATUS.BAD_REQUEST.code).json({
      success: false,
      error: "User already exists",
      message: "A user already exists witht the same email address.",
    });
  }

  // ? lets validate if something is missing
  if (name == null || password == null || email == null) {
    return res.status(HTTP_STATUS.BAD_REQUEST.code).json({
      success: false,
      error: "Data is missing. Send all data.",
      message: "We need full data to create user.",
    });
  }

  //* step 1 -> Create a hashed password using Salting
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  //* step -> 2 Create the user now

  const createdUser = await prisma.user.create({
    data: {
      name: name,
      email: email,
      password: hashedPassword,
    },
  });

  const JWTToken = generateJwtToken(createdUser.id, res);

  return res.status(HTTP_STATUS.CREATED.code).json({
    success: true,
    error: "User created successfully",
    message: "User has been created successfully",
    data: {
      jwttoken: JWTToken,
      user: {
        id: createdUser.id,
        name: createdUser.name,
        email: createdUser.email,
      },
    },
  });
};

const loginController = async (req: Request, res: Response) => {
  const { email, password } = await req.body;

  if (email == null || password == null) {
    return res.status(HTTP_STATUS.BAD_REQUEST.code).json({
      success: false,
      error: "Data is missing. Send all data.",
      message: "We need full data to create user.",
    });
  }

  const existingUser = await prisma.user.findUnique({
    where: { email: email },
  });

  if (!existingUser) {
    return res.status(HTTP_STATUS.BAD_REQUEST.code).json({
      success: false,
      error: "User does not exists",
      message: "We could not find any user with this email.",
    });
  }

  const isPasswordVald = await bcrypt.compare(password, existingUser.password);

  if (!isPasswordVald) {
    return res.status(HTTP_STATUS.BAD_REQUEST.code).json({
      success: false,
      error: "Wrong password",
      message: "We could not establish the validity of your entered password.",
    });
  }

  const JWTtoken = generateJwtToken(existingUser.id, res);

  return res.status(HTTP_STATUS.CREATED.code).json({
    success: true,
    error: "User log in successfully",
    message: "User has logged in successfully",
    data: {
      jwttoken: JWTtoken,
      user: {
        id: existingUser.id,
        email: existingUser.email,
      },
    },
  });
};

const logoutController = async (req: Request, res: Response) => {
  //* logout is basically just to clear cookie
  res.cookie("jwt", "", {
    httpOnly: true,
    expires: new Date(0),
  });

  return res.status(HTTP_STATUS.CREATED.code).json({
    success: true,
    error: "Logged out successfully",
    message: "User has logged out successfully",
  });
};

export { registerController, loginController, logoutController };
