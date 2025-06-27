import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import errorHandler from "./middleware/error.middleware";
import authRoute from "./routes/auth.route";
import dotenv from "dotenv";
import bodyParser from "body-parser";
dotenv.config();

const app = express();
// app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:5173",
  })
);

app.get("/", (req, res) => {
  res.send("this is homepage");
});

app.use("/api/auth", authRoute);

app.use(errorHandler);

export { app };
