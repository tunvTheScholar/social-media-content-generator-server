import { IResponse } from "../types/i-reponse";
import crypto from "crypto";
import db from "./firebase.service";

const generateAccessCode = () => {
  const code = crypto.randomInt(100000, 999999).toString();
  return code;
};

const saveAccessCode = async (phoneNumber: string, accessCode: string) => {
  const ref = db.collection("users").doc(phoneNumber);
  await ref.set({ accessCode }, { merge: true });
};

const sendSMS = async (phoneNumber: string, accessCode: string) => {};

interface ICreateNewAccessCodeReq {
  phoneNumber: string;
}
export const createNewAccessCodeService = async ({
  phoneNumber,
}: ICreateNewAccessCodeReq) => {
  try {
    const accessCode = generateAccessCode();
    await saveAccessCode(phoneNumber, accessCode);
    return accessCode;
  } catch (error) {
    throw error;
  }
};
