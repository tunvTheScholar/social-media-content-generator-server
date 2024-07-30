import twilio from "twilio";
import { ENVS } from "../configs/envs";

export const twilioClient = twilio(
  ENVS.TWILIO_ACCOUNT_SID,
  ENVS.TWILIO_AUTH_TOKEN
);
