import express from "express";
import { ENVS } from "./configs/envs";
import cors from "cors";
import bodyParser from "body-parser";
import accessCodeRouter from "./routes/accessCodeRoutes";
import generateRoutes from "./routes/generateRoutes";

const app = express();
app.use(
  cors({
    origin: "*", // Allow requests from this origin
    methods: ["GET", "POST", "PUT", "DELETE"], // Allow these HTTP methods
    credentials: true, // Allow cookies to be sent
  })
);
app.use(bodyParser.json());

app.use("/", accessCodeRouter);
app.use("/", generateRoutes);

app.listen(ENVS.PORT, () => {
  console.log(`Server is running on port ${ENVS.PORT}...`);
});
