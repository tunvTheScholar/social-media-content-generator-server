import express from "express";
import { ENVS } from "./configs/envs";
import cors from "cors";
import bodyParser from "body-parser";
import accessCodeRouter from "./routes/accessCodeRoutes";

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use("/", accessCodeRouter);

app.listen(ENVS.PORT, () => {
  console.log(`Server is running on port ${ENVS.PORT}...`);
});
