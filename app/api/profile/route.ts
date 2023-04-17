import { getServerSession } from "next-auth";
import { NextAuthOptions } from "next-auth";

import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { FIREBASE_SERVER_STORE } from "@/services/FirebaseServer";
import { Profile } from "@/types";
export async function GET() {
  try {
    const session = await getServerSession(authOptions);
    if (session?.user) {
      const queryProfile = await FIREBASE_SERVER_STORE.collection("profile")
        .doc(session.user.id)
        .get();
      const data = queryProfile.data();
      return new Response(JSON.stringify({ data }), {
        status: 200,
      });
    } else {
      // Return Unahorized
      return new Response("");
    }
  } catch (error) {
    return new Response(
      JSON.stringify({ data: { message: "Something went wrong" } }),
      {
        status: 400,
      }
    );
  }
}

export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions);

    const bodyValues: Profile = await req.json();

    bodyValues.role = "USER";

    if (session?.user) {
      await FIREBASE_SERVER_STORE.collection("profile")
        .doc(session.user.id)
        .set(bodyValues)
        .then((value) => {
          return new Response(JSON.stringify({ data: {} }), {
            status: 201,
          });
        })
        .catch((error) => {
          return new Response(JSON.stringify({ data: {} }), {
            status: 403,
          });
        });
    } else {
      // Return Unahorized
      return new Response(JSON.stringify({ data: {} }), {
        status: 403,
      });
    }
  } catch (error) {
    return new Response(
      JSON.stringify({ data: { message: "Something went wrong" } }),
      {
        status: 400,
      }
    );
  }
}
