import { Router } from "express";
import { generatePostCaptions } from "../controllers/generate/generate-post-captions";
import { saveCaptionHandle } from "../controllers/generate/save-caption";
import { unsaveGeneratedCaptionHandle } from "../controllers/generate/unsave-caption";

const generateRoutes = Router();

generateRoutes.post("/GeneratePostCaptions", generatePostCaptions);
generateRoutes.post("/SaveGeneratedContent", saveCaptionHandle);
generateRoutes.post("/UnSaveContent", unsaveGeneratedCaptionHandle);

export default generateRoutes;
