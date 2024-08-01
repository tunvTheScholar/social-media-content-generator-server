import { Router } from "express";
import { generatePostCaptions } from "../controllers/generate/generate-post-captions";
import { getPostIdeasHandle } from "../controllers/generate/get-post-ideas";
import { saveCaptionHandle } from "../controllers/generate/save-caption";
import { unsaveGeneratedCaptionHandle } from "../controllers/generate/unsave-caption";
import { createCaptionFromIdeaHandle } from "../controllers/generate/create-captions-from-idea";
import { getUserGeneratedContentsHandle } from "../controllers/generate/get-user-generated-contents";

const generateRoutes = Router();

generateRoutes.post("/GeneratePostCaptions", generatePostCaptions);
generateRoutes.post("/SaveGeneratedContent", saveCaptionHandle);
generateRoutes.post("/UnSaveContent", unsaveGeneratedCaptionHandle);
generateRoutes.post("/GetPostIdeas", getPostIdeasHandle);
generateRoutes.post("/CreateCaptionsFromIdeas", createCaptionFromIdeaHandle);
generateRoutes.post(
  "/GetUserGeneratedContents",
  getUserGeneratedContentsHandle
);

export default generateRoutes;
