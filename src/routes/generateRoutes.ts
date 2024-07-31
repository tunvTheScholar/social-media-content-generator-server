import { Router } from "express";
import { generatePostCaptions } from "../controllers/generate/generate-post-captions";

const generateRoutes = Router();

generateRoutes.post("/GeneratePostCaptions", generatePostCaptions);

export default generateRoutes;
