import { getServerSession } from "next-auth";
import { NextAuthOptions } from "next-auth";

import { authOptions } from "@/pages/api/auth/[...nextauth]";
export async function GET() {
  const session = await getServerSession(authOptions);
  if (session?.user) {
    //User Signed in fetch user profile If Exist
    return new Response("");
  } else {
    // Return Unahorized
    return new Response("");
  }
}

export async function POST() {
  return new Response("hey");
}
