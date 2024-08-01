import admin from "firebase-admin";
import serviceAccount from "../service-account.json";

admin.initializeApp({
  databaseURL: "https://social-media-content-gen-e83ef.firebaseio.com",
  credential: admin.credential.cert(serviceAccount as admin.ServiceAccount),
});

const db = admin.firestore();

export default db;
