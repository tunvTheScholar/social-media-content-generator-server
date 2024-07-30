import { Request, Response } from "express";
import { IResponse } from "../../types/i-reponse";
import { validateAccessCodeService } from "../../services/accessCode.service";

export const validateAccessCodeHandler = async (
  req: Request,
  res: Response
) => {
  const { phoneNumber, accessCode } = req.body;

  if (!phoneNumber || !accessCode) {
    const errorMsg: IResponse<null> = {
      data: null,
      isSuccess: false,
      errorCode: "INVALID_REQUEST_BODY",
      errorMessage:
        "Invalid request body. Please provide phoneNumber and accessCode.",
    };

    return res.status(400).json(errorMsg);
  }

  try {
    const isValid = await validateAccessCodeService({
      accessCode,
      phoneNumber,
    });

    if (isValid) {
      const successMsg: IResponse<null> = {
        data: null,
        isSuccess: true,
      };
      res.status(200).json(successMsg);
    } else {
      const errorMsg: IResponse<null> = {
        data: null,
        isSuccess: false,
        errorCode: "INVALID_ACCESS_CODE",
        errorMessage: "Invalid access code or user not found.",
      };

      res.status(401).json(errorMsg);
    }
  } catch (error) {
    const errorMsg: IResponse<null> = {
      data: null,
      isSuccess: false,
      errorCode: "ERR_VALIDATE_ACCESS_CODE",
      errorMessage:
        error instanceof Error
          ? error.message
          : "An error occurred while validating access code.",
    };

    res.status(500).json(errorMsg);
  }
};
