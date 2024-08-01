import { Request, Response } from "express";
import { IResponse } from "../../types/i-reponse";
import { unsaveGeneratedCaption } from "../../services/generate.service";

export const unsaveGeneratedCaptionHandle = async (
  req: Request,
  res: Response
) => {
  const { phoneNumber, captionId } = req.body;

  if (!phoneNumber || !captionId) {
    const errorMsg: IResponse<null> = {
      data: null,
      isSuccess: false,
      errorMessage: "Phone number and caption ID are required",
      errorCode: "REQUIRED_FIELDS",
    };
    res.status(400).json(errorMsg);
  }

  try {
    await unsaveGeneratedCaption({
      phoneNumber,
      captionId,
    });

    res.status(200).json({
      data: null,
      isSuccess: true,
    });
  } catch (error) {
    //
    const errorMessage: IResponse<null> = {
      data: null,
      isSuccess: false,
      errorMessage:
        error instanceof Error ? error.message : "Internal server error",
      errorCode: "",
    };

    res.status(500).json(errorMessage);
  }
};
