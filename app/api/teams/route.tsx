import { FIREBASE_SERVER_STORE } from "@/services/FirebaseServer";
import { Team } from "@/types";

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

// export async function POST(req: Request) {
//   try {
//     const bodyValues: Team = await req.json();
//     await FIREBASE_SERVER_STORE.collection("teams").doc("s1").set(bodyValues);
//     return new Response(JSON.stringify({ data: bodyValues }), {
//       status: 200,
//     });
//   } catch (error) {
//     return new Response(
//       JSON.stringify({ data: { message: "Something went wrong" } }),
//       {
//         status: 400,
//       }
//     );
//   }
// }
