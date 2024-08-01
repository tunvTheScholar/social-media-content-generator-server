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
  const res = await captionsRef.add({
    topic,
    title,
    caption,
    createdAt: Date.now(),
  });
  return res.id;
};

interface IUnsavedCaption {
  phoneNumber: string;
  captionId: string;
}

export const unsaveGeneratedCaption = async ({
  phoneNumber,
  captionId,
}: IUnsavedCaption) => {
  const userRef = db.collection("users").doc(phoneNumber);
  const captionRef = userRef.collection("captions").doc(captionId);
  const doc = await captionRef.get();
  if (!doc.exists) {
    throw new Error("Caption not found");
  }
  await captionRef.delete();
};

interface IGetPostIdeasRequest {
  topic: string;
  seperator?: string;
  numOfIdeas?: number;
}

export const getPostIdeasService = async ({
  topic,
  seperator = "|",
  numOfIdeas = 10,
}: IGetPostIdeasRequest) => {
  const prompt = `Generate ${numOfIdeas} engaging post ideas for social media about ${topic}. Each idea should be concise and on a new line. Separator: ${seperator}. Ideal only, dont get the title, and no longer than 280 characters. `;
  const result = await modelGemini15Flash.generateContent(prompt);
  const response = result.response;
  const text = response.text();

  return text;
};

interface ICreateCaptionFromIdeaRequest {
  idea: string;
  topic: string;
  limit?: number;
  separator?: string;
}

export const createCaptionFromIdeaService = async ({
  idea,
  topic,
  limit = 10,
  separator = "|",
}: ICreateCaptionFromIdeaRequest) => {
  const prompt = `Generate ${limit} engaging social media captions for the following post idea about ${topic}:
  "${idea}" Each caption should be in the json format {title, caption}, separated by " | ", and no longer than 280 characters.`;

  const result = await modelGemini15Flash.generateContent(prompt);
  const response = result.response;
  const text = response.text();

  return text;
};
