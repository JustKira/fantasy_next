import * as admin from "firebase-admin";

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert({
      projectId: process.env.FIREBASE_PROJECT_ID as string,
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL as string,
      privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(
        /\\n/g,
        "\n"
      ) as string,
    }),
    databaseURL: process.env.FIREBASE_DATABASE_URL as string,
  });
}

export const FIREBASE_SERVER = admin;
export const FIREBASE_SERVER_STORE = admin.firestore();
export const FIREBASE_SERVER_AUTH = admin.auth();
