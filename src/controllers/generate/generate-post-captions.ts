import { Request, Response } from "express";
import { generatePostCaptionsService } from "../../services/generate.service";
import { IResponse } from "../../types/i-reponse";

export const generatePostCaptions = async (req: Request, res: Response) => {
  try {
    const { socialNetwork, subject, tone } = req.body;

    if (!socialNetwork || !subject || !tone) {
      const errMsg: IResponse<null> = {
        data: null,
        isSuccess: false,
        errorCode: "INVALID_REQUEST_BODY",
        errorMessage:
          "Invalid request body. Please provide socialNetwork, subject, and tone.",
      };
      res.status(400).json(errMsg);
      return;
    }

    const captions = await generatePostCaptionsService({
      socialNetwork,
      subject,
      tone,
    });
    const resMsg: IResponse<string[]> = {
      isSuccess: true,
      data: captions
        .trim()
        .split("|")
        .map((caption) => caption.trim()),
    };
    res.status(200).json(resMsg);
  } catch (error) {
    console.error("Error generating captions:", error);
    const errMsg: IResponse<null> = {
      data: null,
      isSuccess: false,
      errorMessage: "An error occurred while generating captions.",
      errorCode: "INTERNAL_SERVER_ERROR",
    };
    res.status(500).json(errMsg);
  }
};
