import { FIREBASE_SERVER_STORE } from "@/services/FirebaseServer";
import { Team } from "@/types";

export async function GET() {
  try {
    const query = await FIREBASE_SERVER_STORE.collection("teams")
      .doc("s1")
      .get();
    if (query) {
      const data = query.data();
      return new Response(JSON.stringify({ data }), {
        status: 200,
      });
    } else {
      return new Response(JSON.stringify({ data: {} }), {
        status: 400,
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

export async function POST(req: Request) {
  const bodyValues: { teams: Team[] } = await req.json();
  console.log(bodyValues);

  try {
    await FIREBASE_SERVER_STORE.collection("teams").doc("s1").set(bodyValues);
    return new Response(JSON.stringify({ data: {} }), {
      status: 200,
    });
  } catch (error) {
    return new Response(
      JSON.stringify({ data: { message: "Something went wrong" } }),
      {
        status: 400,
      }
    );
  }
}
