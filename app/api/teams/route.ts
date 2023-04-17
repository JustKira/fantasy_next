import { FIREBASE_SERVER_STORE } from "@/services/FirebaseServer";
import { Teams } from "@/types";

export async function GET() {
  const query = await FIREBASE_SERVER_STORE.collection("teams").doc("s1").get();
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
}

export async function POST(req: Request) {
  const bodyValues: Teams = await req.json();
  const {} = await FIREBASE_SERVER_STORE.collection("teams")
    .doc("s1")
    .set(bodyValues);
  return new Response(JSON.stringify({ data: bodyValues }), {
    status: 200,
  });
}
