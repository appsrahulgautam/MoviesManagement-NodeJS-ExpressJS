import { Response } from "express";
import jwt from "jsonwebtoken";

//* we are using user id to create jwt and then signing with
//* our own random JWTSECRET
export const generateJwtToken = (userId: string, res: Response): string => {
  const secret = process.env.JWT_SECRET;
  if (!secret) {
    throw new Error("JWT_SECRET is not defined");
  }

  const jwttoken = jwt.sign({ id: userId }, secret, {
    expiresIn: "7d",
  });

  // * 👉 This adds a Set-Cookie header to the HTTP response.
  //* Browser automatically saves it. Frontend code needs nothing to do.
  //* its not saved in database, not in JS storage. No JS can read it.
  //
  res.cookie("jwt", jwttoken, {
    httpOnly: true, //* <---- ❌ JavaScript CANNOT read this cookie. Protects against XSS attacks
    secure: process.env.NODE_ENV == "production" ? true : false, //* Cookie sent only over HTTPS
    sameSite: "strict", //<--- safest
    maxAge: 1000 * 60 * 60 * 24 * 7, //<---7DAYS
  });

  return jwttoken;
};
