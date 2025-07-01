import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import errorHandler from "./middleware/error.middleware";
import dotenv from "dotenv";
import bodyParser from "body-parser";

// middlewares
import { authHandler } from "./middleware/auth.middleware";

// routes
import authRoutes from "./routes/auth.route";
import projectRoutes from "./routes/project.route";
dotenv.config();

const app = express();
// app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("this is homepage");
});

app.use("/api/auth", authRoutes);
app.use("/api/project", authHandler, projectRoutes);

app.use(errorHandler);

export { app };
