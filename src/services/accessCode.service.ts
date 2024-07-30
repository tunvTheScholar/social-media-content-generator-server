import crypto from "crypto";
import db from "./firebase.service";
import { twilioClient } from "./twilio.service";
import { ENVS } from "../configs/envs";

const generateAccessCode = () => {
  const code = crypto.randomInt(100000, 999999).toString();
  return code;
};

const saveAccessCode = async (phoneNumber: string, accessCode: string) => {
  const ref = db.collection("users").doc(phoneNumber);
  await ref.set({ accessCode }, { merge: true });
};

const sendSMS = async (phoneNumber: string, accessCode: string) => {
  await twilioClient.messages.create({
    body: `Your access code is: ${accessCode}`,
    from: ENVS.TWILIO_PHONE_NUMBER,
    to: `+84${phoneNumber}`,
  });
};

interface ICreateNewAccessCodeReq {
  phoneNumber: string;
}
export const createNewAccessCodeService = async ({
  phoneNumber,
}: ICreateNewAccessCodeReq) => {
  try {
    const accessCode = generateAccessCode();
    await saveAccessCode(phoneNumber, accessCode);
    await sendSMS(phoneNumber, accessCode);
    return accessCode;
  } catch (error) {
    throw error;
  }
};
