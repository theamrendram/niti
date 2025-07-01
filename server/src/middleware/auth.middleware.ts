import { verifyToken } from "../services/jwt.service";
import { Request, Response, NextFunction } from "express";

interface UserRequest extends Request {
  user?: any;
}

export const authHandler = (
  req: UserRequest,
  res: Response,
  next: NextFunction
) => {
  const token = req.cookies._auth_token;
  if (!token)
    res.status(401).json({
      success: false,
      message: "Unauthorized",
    });

  try {
    const decode = verifyToken(token);
    req.user = decode;
    next();
  } catch (error: any) {
    console.error("JWT verification error:", error.message);
    res.status(403).json({
      success: false,
      message: "Invalid token",
    });
  }
};
