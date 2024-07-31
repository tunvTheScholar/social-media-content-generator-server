import { Request, Response } from "express";
import { createNewAccessCodeService } from "../../services/accessCode.service";
import { IResponse } from "../../types/i-reponse";

export const createNewAccessCodeHandler = async (
  req: Request,
  res: Response
) => {
  const bodyData = req.body;

  console.log("🚀 ~ bodyData:", bodyData);
  try {
    const accessCode = await createNewAccessCodeService({
      phoneNumber: bodyData.phoneNumber,
    });
    const resMsg: IResponse<{ accessCode: string }> = {
      isSuccess: true,
      data: { accessCode },
    };
    res.status(200).json(resMsg);
  } catch (error) {
    const errorMsg: IResponse<null> = {
      data: null,
      isSuccess: false,
      errorCode: "ERR_CREATE_ACCESS_CODE",
      errorMessage:
        error instanceof Error ? error.message : "An error occurred",
    };
    res.status(500).json(errorMsg);
  }
};
