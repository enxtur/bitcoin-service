import express from "express";
import bodyParser from "body-parser";
import morgan from "morgan";
import { router } from "./routes";

export const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use("/api", router);