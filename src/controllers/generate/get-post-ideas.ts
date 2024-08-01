import { Request, Response } from "express";
import { IResponse } from "../../types/i-reponse";
import { getPostIdeasService } from "../../services/generate.service";

export const getPostIdeasHandle = async (req: Request, res: Response) => {
  const { topic } = req.body;

  if (!topic) {
    const errorMsg: IResponse<null> = {
      data: null,
      isSuccess: false,
      errorCode: "INVALID_TOPIC",
      errorMessage: "Topic is required",
    };
    res.status(400).json(errorMsg);
  }

  try {
    const text = await getPostIdeasService({ topic });
    const resMsg: IResponse<string[]> = {
      data: text
        .trim()
        .split("|")
        .filter((v) => !!v),
      isSuccess: true,
    };
    res.status(200).json(resMsg);
  } catch (error) {
    const errorMsg: IResponse<null> = {
      data: null,
      isSuccess: false,
      errorCode: "",
      errorMessage:
        error instanceof Error ? error.message : "An error occurred",
    };

    res.status(500).json(errorMsg);
  }
};
