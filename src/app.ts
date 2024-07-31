import express from "express";
import { ENVS } from "./configs/envs";
import cors from "cors";
import bodyParser from "body-parser";
import accessCodeRouter from "./routes/accessCodeRoutes";

const app = express();
app.use(
  cors({
    origin: "http://localhost:3000", // Allow requests from this origin
    methods: ["GET", "POST", "PUT", "DELETE"], // Allow these HTTP methods
    credentials: true, // Allow cookies to be sent
  })
);
app.use(bodyParser.json());

app.use("/", accessCodeRouter);

app.listen(ENVS.PORT, () => {
  console.log(`Server is running on port ${ENVS.PORT}...`);
});
