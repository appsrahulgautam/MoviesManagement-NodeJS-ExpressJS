import { Request, Response } from "express";

const registerController = async (req: Request, res: Response) => {
  const { message } = req.body;
  res.json(message);
};

export { registerController };
