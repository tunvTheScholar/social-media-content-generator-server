import { Router } from "express";
import { createNewAccessCodeHandler } from "../controllers/access-code/create-new-access-code";

const accessCodeRouter = Router();

accessCodeRouter.post("/CreateNewAccessCode", createNewAccessCodeHandler);

export default accessCodeRouter;
