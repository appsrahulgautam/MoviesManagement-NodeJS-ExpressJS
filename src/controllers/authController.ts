import { Request, Response } from "express";
import { prisma } from "../config/db";
import { HTTP_STATUS } from "../constants/httpstatus";

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

  return res.status(HTTP_STATUS.CREATED.code).json({
    success: false,
    error: "User already exists",
    message: "A user already exists witht the same email address.",
  });
};

export { registerController };
