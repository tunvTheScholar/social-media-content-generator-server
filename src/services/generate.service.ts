import db from "./firebase.service";
import { modelGemini15Flash } from "./gemini.service";

interface IGeneratePostCaptionsRequest {
  socialNetwork: string;
  subject: string;
  tone: string;
}

export const generatePostCaptionsService = async ({
  socialNetwork,
  subject,
  tone,
}: IGeneratePostCaptionsRequest) => {
  const prompt = `Generate 5 engaging captions for a ${socialNetwork} post about ${subject} with a ${tone} tone. Each caption should be in the json format {title, caption}, separated by " | ", and no longer than 280 characters.`;
  const result = await modelGemini15Flash.generateContent(prompt);
  const response = result.response;
  const text = response.text();

  return text;
};

interface ISaveCaptionsRequest {
  phoneNumber: string;
  title: string;
  caption: string;
  topic: string;
}

export const saveCaptionsService = async ({
  caption,
  phoneNumber,
  title,
  topic,
}: ISaveCaptionsRequest) => {
  const userRef = db.collection("users").doc(phoneNumber);
  const captionsRef = userRef.collection("captions");
  await captionsRef.add({
    topic,
    title,
    caption,
    createdAt: Date.now(),
  });
};
