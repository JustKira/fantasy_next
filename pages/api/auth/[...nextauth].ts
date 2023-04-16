import { FIREBASE_SERVER_STORE } from "@/services/FirebaseServer";
import { FirestoreAdapter } from "@next-auth/firebase-adapter";
import NextAuth, { AuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";

export const authOptions: AuthOptions = {
  secret: process.env.AUTH_SECRET,
  adapter: FirestoreAdapter(FIREBASE_SERVER_STORE),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
    }),
  ],
};

export default NextAuth(authOptions);
