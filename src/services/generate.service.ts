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
