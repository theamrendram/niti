import { Request, Response } from "express";
// import { prisma } from "../services/prisma.service";

const createProject = async (req: Request, res: Response): Promise<void> => {
  try {
    res.status(201).json({ message: "project created successfully" });
    return;
  } catch (error) {
    console.log("error while creating project");
    res.status(400).json(error);
    return;
  }
};

export { createProject };
