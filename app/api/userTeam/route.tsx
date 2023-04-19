import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { FIREBASE_SERVER_STORE } from "@/services/FirebaseServer";
import { UserTeam } from "@/types";
import { getServerSession } from "next-auth";
export async function GET(req: Request) {
  try {
    // const { searchParams } = new URL(req.url);
    // const { userTeamId } = searchParams as any;

    const session = await getServerSession(authOptions);
    if (session?.user) {
      const query = await FIREBASE_SERVER_STORE.collection("userTeam")
        .doc(session?.user.id)
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
    if (!session?.user) {
      return new Response(
        JSON.stringify({ data: { message: "UnAuthorized" } }),
        {
          status: 400,
        }
      );
    }
    const previous = await FIREBASE_SERVER_STORE.collection("userTeam")
      .doc(session.user.id)
      .get();

    const bodyValues: UserTeam = await req.json();
    if (!previous) {
      bodyValues.ballance = 100000000;
      bodyValues.cards.allin = 1;
      bodyValues.cards.allin_status = false;
      bodyValues.cards.team_fan = 1;
      bodyValues.cards.team_fan_status = false;
      bodyValues.cards.triple_captin = 1;
      bodyValues.cards.triple_captin_status = false;
      bodyValues.cards.wild_card = 1;
      bodyValues.cards.wild_card_status = false;
      bodyValues.overcharge = 0;
      bodyValues.total_points = 0;
      bodyValues.week_points = 0;
      bodyValues.week = 1;
      bodyValues.transfers = 2;
    }
    await FIREBASE_SERVER_STORE.collection("userTeam")
      .doc(session.user.id)
      .set(bodyValues);
    return new Response(JSON.stringify({ data: bodyValues }), {
      status: 200,
    });
  } catch (error) {
    return new Response(
      JSON.stringify({
        data: { message: "Something went wrong with Create User Team" },
      }),
      {
        status: 400,
      }
    );
  }
}
