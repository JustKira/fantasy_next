import { getServerSession } from "next-auth";
import { NextAuthOptions } from "next-auth";

import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { FIREBASE_SERVER_STORE } from "@/services/FirebaseServer";
import { Profile } from "@/types";
export async function GET() {
  const session = await getServerSession(authOptions);
  if (session?.user) {
    return new Response(`${session.user.id}`);
  } else {
    // Return Unahorized
    return new Response("");
  }
}

export async function POST(req: Request) {
  const session = await getServerSession(authOptions);

  const bodyValues: Profile = await req.json();

  bodyValues.role = "USER";

  if (session?.user) {
    await FIREBASE_SERVER_STORE.collection("profile")
      .doc(session.user.id)
      .set(bodyValues)
      .then((value) => {
        return new Response(JSON.stringify({ data: { value } }), {
          status: 201,
        });
      })
      .catch((error) => {
        return new Response(JSON.stringify({ data: { error } }), {
          status: 403,
        });
      });
  } else {
    // Return Unahorized
    return new Response("");
  }
}
