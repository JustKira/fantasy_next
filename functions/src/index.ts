import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
admin.initializeApp();

export const myRequestFunction = functions.https.onRequest(async (req, res) => {
  try {
    const teams = await admin.firestore().collection("teams").doc("s1").get();
    const userteam = await admin.firestore().collection("userTeam").get();
    const users = userteam.docs.map((e) => {
      return { ...e.data(), id: e.id };
    });
    users.map(async (user: any) => {
      const timestamp = admin.firestore.Timestamp.now();
      const seconds = timestamp.seconds;

      const date = new Date(seconds * 1000);
      const year = date.getFullYear().toString().substr(-2);
      const month = (date.getMonth() + 1).toString().padStart(2, "0");
      const week = Math.ceil((date.getDate() + date.getDay()) / 7);

      const formattedTimestamp = `${week}-${month}-${year}`;
      for (let i = 0; i < user.user_team.user_team.length; i++) {
        // user.user_team.user_team[i].name
        const team = teams
          .data()
          ?.teams.find(
            (team: any) =>
              team.team_name === user.user_team.user_team[i].team_name
          );
        const player = team.players.find(
          (player: any) => player.name === user.user_team.user_team[i].name
        );

        await admin
          .firestore()
          .collection("userTeam")
          .doc(user.id)
          .update({
            player_points: admin.firestore.FieldValue.arrayUnion({
              stats: player.stats[player.stats.length - 1],
              name: player.name,
              week: formattedTimestamp,
              captin: user.user_team.user_team[7].name,
            }),
          });
      }
    });
    res.status(200).send(teams.data());
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred while processing the request.");
  }
});
