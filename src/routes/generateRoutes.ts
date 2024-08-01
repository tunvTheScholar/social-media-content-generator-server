import { Router } from "express";
import { generatePostCaptions } from "../controllers/generate/generate-post-captions";
import { saveCaptionHandle } from "../controllers/generate/save-caption";

const generateRoutes = Router();

generateRoutes.post("/GeneratePostCaptions", generatePostCaptions);
generateRoutes.post("/SaveGeneratedContent", saveCaptionHandle);

export default generateRoutes;
