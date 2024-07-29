import express from "express";
import { ENVS } from "./constants/envs";

const app = express();

console.log(process.env);

app.listen(ENVS.PORT, () => {
  console.log(`Server is running on port ${ENVS.PORT}...`);
});
