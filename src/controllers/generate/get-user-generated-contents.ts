import { Request, Response } from "express";
import { IResponse } from "../../types/i-reponse";
import {
  GeneratedContent,
  getUserGeneratedContentsService,
} from "../../services/generate.service";

export const getUserGeneratedContentsHandle = async (
  req: Request,
  res: Response
) => {
  const { phoneNumber } = req.body;

  if (!phoneNumber) {
    const errorMsg: IResponse<null> = {
      data: null,
      isSuccess: false,
      errorCode: "INVALID_PHONE_NUMBER",
      errorMessage: "Please provide a valid phone number",
    };
    return res.status(400).json(errorMsg);
  }

  try {
    const result = await getUserGeneratedContentsService({ phoneNumber });
    const captions: IResponse<GeneratedContent[]> = {
      data: result,
      isSuccess: true,
    };

    res.json(captions);
  } catch (error) {
    const errorMsg: IResponse<null> = {
      data: null,
      isSuccess: false,
      errorMessage:
        error instanceof Error ? error.message : "An error occurred",
    };

    res.status(500).json(errorMsg);
  }
};
