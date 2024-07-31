import { Request, Response } from "express";
import { saveCaptionsService } from "../../services/generate.service";
import { IResponse } from "../../types/i-reponse";

export const saveCaptionHandle = async (req: Request, res: Response) => {
  try {
    const { phoneNumber, topic, title, caption } = req.body;

    if (!phoneNumber || !topic || !title || !caption) {
      const errorMessage: IResponse<null> = {
        data: null,
        isSuccess: false,
        errorMessage:
          "Phone number, topic, and data (title and caption) are required",
        errorCode: "REQUIRED_FIELDS",
      };
      res.status(400).json(errorMessage);
      return;
    }

    await saveCaptionsService({
      caption,
      phoneNumber,
      title,
      topic,
    });
    const resMsg: IResponse<null> = {
      data: null,
      isSuccess: true,
    };

    res.status(200).json(resMsg);
  } catch (error) {
    console.error("Error saving generated content:", error);
    const errorMessage: IResponse<null> = {
      data: null,
      isSuccess: false,
      errorMessage: "Internal server error",
      errorCode: "",
    };
    res.status(500).json(errorMessage);
  }
};
