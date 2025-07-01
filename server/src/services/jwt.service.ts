import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
const JWT_SECRET = process.env.JWT_SECRET;

export const generateToken = (
  payload: any,
  expiresIn: number = 60 * 60 * 24 * 30
) => {
  if (!JWT_SECRET) {
    throw new Error("JWT_SECRET is not defined");
  }
  return jwt.sign(payload, JWT_SECRET, { expiresIn: expiresIn });
};

export const verifyToken = (token: string) => {
  if (!JWT_SECRET) {
    throw new Error("JWT_SECRET is not defined");
  }
  return jwt.verify(token, JWT_SECRET);
};
