import {
  FIREBASE_SERVER_AUTH,
  FIREBASE_SERVER_STORE,
  FIREBASE_SERVER,
} from "@/services/FirebaseServer";
import { FirestoreAdapter } from "@next-auth/firebase-adapter";
import { getAuth, signInWithCustomToken } from "firebase/auth";
import NextAuth, { AuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { FIREBASE_CLIENT } from "@/services/FirebaseClient";
import { AdapterUser } from "next-auth/adapters";
declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: AdapterUser;
  }
}

const auth = getAuth(FIREBASE_CLIENT);

export const authOptions: AuthOptions = {
  secret: process.env.AUTH_SECRET,
  adapter: FirestoreAdapter(FIREBASE_SERVER_STORE),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  callbacks: {
    async redirect({ url, baseUrl }) {
      return baseUrl;
    },
    async session({ session, user, token }) {
      // if (session?.user) {
      //   session.user = token;
      // }
      session.user = user;
      return session;
    },
  },
};

export default NextAuth(authOptions);
