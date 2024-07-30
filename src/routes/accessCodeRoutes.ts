import { Router } from "express";
import { createNewAccessCodeHandler } from "../controllers/access-code/create-new-access-code";
import { validateAccessCodeHandler } from "../controllers/access-code/validate-access-code";

const accessCodeRouter = Router();

accessCodeRouter.post("/CreateNewAccessCode", createNewAccessCodeHandler);
accessCodeRouter.post("/ValidateAccessCode", validateAccessCodeHandler);

export default accessCodeRouter;
