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
  try {
    const bodyValues: Team = await req.json();
    const query = await FIREBASE_SERVER_STORE.collection("teams")
      .doc("s1")
      .get();
    const { teams } = query.data() as {
      teams: Array<Team>;
    };
    if (teams.length > 0) {
      teams.push(bodyValues);

      await FIREBASE_SERVER_STORE.collection("teams")
        .doc("s1")
        .set({ teams: teams });
      return new Response(
        JSON.stringify({
          res: { data: teams, message: "Successfully added team" },
        }),
        {
          status: 200,
        }
      );
    } else {
      await FIREBASE_SERVER_STORE.collection("teams")
        .doc("s1")
        .set({ teams: new Array(bodyValues) });
      return new Response(
        JSON.stringify({
          res: { data: bodyValues, message: "Successfully added team" },
        }),
        {
          status: 200,
        }
      );
    }
  } catch (error) {
    return new Response(
      JSON.stringify({ data: { message: "Something went wrong" }, error }),
      {
        status: 400,
      }
    );
  }
}
