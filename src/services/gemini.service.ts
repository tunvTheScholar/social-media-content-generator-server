import { GoogleGenerativeAI } from "@google/generative-ai";
import { ENVS } from "../configs/envs";

const genAI = new GoogleGenerativeAI(ENVS.GEMINI_API_KEY);

export const modelGemini15Flash = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});
