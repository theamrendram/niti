import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import prismaClient from "../services/prisma.service";
// import { supabase } from "../services/supabase-client";
import { generateToken, verifyToken } from "../services/jwt.service";

async function hashPassword(password: string) {
  const saltRounds = parseInt(process.env.SALT_ROUNDS!);
  const salt = await bcrypt.genSalt(saltRounds);
  const hash = await bcrypt.hash(password, salt);
  return hash;
}

async function verifyPassword(
  inputPassword: string,
  hashedPasswordFromDB: string
) {
  return await bcrypt.compare(inputPassword, hashedPasswordFromDB);
}

const signIn = async (req: Request, res: Response): Promise<void> => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400).json({ error: "Email and password are required" });
    return;
  }

  try {
    const user = await prismaClient.user.findUnique({
      where: {
        email,
      },
    });

    if (!user) {
      res.status(401).json({ error: "Invalid credentials" });
      return;
    }
    if (!(await verifyPassword(password, user.password))) {
      res.status(401).json({ error: "Invalid credentials" });
      return;
    }
    const token = generateToken({ email: user.email, id: user.id });

    res.cookie("_auth_token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 60 * 60 * 1000,
    });

    res.status(200).json({
      success: true,
      message: "Logged in successfully",
      data: {
        id: user.id,
        email: user.email,
        fullName: user.firstName + " " + user.lastName,
      },
    });
  } catch (error: any) {
    console.log("Error occurred when signing in");
    res.status(401).json({
      success: false,
      message: "some error occurred",
    });
  }
};

const signUp = async (req: Request, res: Response): Promise<void> => {
  const { firstName, lastName, email, password, phone = 1234567890 } = req.body;

  if (!firstName || !lastName || !email || !password || !phone) {
    res.status(400).json({
      message: "firstName, lastName, email, password and phone are required",
    });
    return;
  }

  const hashedPassword = await hashPassword(password);
  console.log(hashedPassword);

  try {
    const user = await prismaClient.user.create({
      data: {
        firstName,
        lastName,
        email,
        password: hashedPassword,
      },
    });
    console.log("user", user);

    const token = generateToken({ email, id: user.id });

    res.cookie("_auth_token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 1000 * 60 * 60 * 24 * 7, // 7 days
    });
    res.status(201).json({ user: user });
    return;
  } catch (error: any) {
    console.log("error while signup", error);
    res
      .status(400)
      .json({ message: "Some error occurred", error: error.message });
    return;
  }
};

const updatePassword = async (req: Request, res: Response): Promise<void> => {
  try {
    const { email, currentPassword, newPassword } = req.body;

    if (!email || !currentPassword || !newPassword) {
      res.status(400).json({ message: "Missing required fields" });
      return;
    }

    const user = await prismaClient.user.findUnique({
      where: { email },
    });

    if (!user || !(await verifyPassword(currentPassword, user.password))) {
      res.status(401).json({ message: "Invalid credentials" });
      return;
    }

    const hashedPassword = await hashPassword(newPassword);
    await prismaClient.user.update({
      where: { email },
      update: { password: hashedPassword },
    });

    res.status(200).json({ message: "Password updated successfully" });
  } catch (error: any) {
    console.error("Error updating password:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// const signIn = async (req: Request, res: Response): Promise<void> => {
//   const { email, password } = req.body;
//   console.log(email, password, req.body);
//   const { data, error } = await supabase.auth.signInWithPassword({
//     email,
//     password,
//   });
//   if (error) {
//     res.status(400).json({ success: false, message: error.message });
//     return;
//   }

//   res.cookie("_auth_token", data.session?.access_token, {
//     httpOnly: true,
//     secure: process.env.NODE_ENV === "production",
//     sameSite: "lax",
//     maxAge: 1000 * 60 * 60 * 24 * 7, // 7 days
//   });
//   res.status(200).json({
//     success: true,
//     user: { email: data.user.email, id: data.user.id, role: data.user.role },
//     session: {
//       access_token: data.session.access_token,
//       expires_at: data.session.expires_at,
//     },
//   });
//   return;
// };

export { signIn, signUp, updatePassword };
