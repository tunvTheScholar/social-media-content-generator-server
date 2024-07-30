import { ENVS } from "./envs";

export const firebaseConfig = {
  apiKey: ENVS.FIRE_BASE_API_KEY,
  authDomain: ENVS.FIRE_BASE_AUTH_DOMAIN,
  projectId: ENVS.FIRE_BASE_PROJECT_ID,
  storageBucket: ENVS.FIRE_BASE_STORAGE_BUCKET,
  messagingSenderId: ENVS.FIRE_BASE_MESSAGING_SENDER_ID,
  appId: ENVS.FIRE_BASE_APP_ID,
  //   measurementId: ,
};
