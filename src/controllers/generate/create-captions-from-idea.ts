import { Request, Response } from "express";
import { IResponse } from "../../types/i-reponse";
import { createCaptionFromIdeaService } from "../../services/generate.service";

export const createCaptionFromIdeaHandle = async (
  req: Request,
  res: Response
) => {
  const { idea, topic, limit = 2 } = req.body;

  if (!idea || !topic) {
    const errorMsg: IResponse<null> = {
      data: null,
      isSuccess: false,
      errorCode: "INVALID_IDEA_OR_TOPIC",
    };

    return res.status(400).json(errorMsg);
  }

  try {
    const captions = await createCaptionFromIdeaService({
      idea,
      topic,
      limit,
    });

    return res.status(200).json({
      data: captions,
      isSuccess: true,
    });
  } catch (error) {
    const errorMsg: IResponse<null> = {
      data: null,
      isSuccess: false,
      errorMessage:
        error instanceof Error ? error.message : "An error occurred",
    };

    return res.status(500).json(errorMsg);
  }
};
