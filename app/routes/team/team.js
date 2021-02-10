import Route from '@ember/routing/route';
import RSVP from "rsvp";

export default class TeamTeamRoute extends Route {
  async model({ team_id }) {
    const clips = await this.store.findAll("clip");
    return RSVP.hash({
      teams: this.store.findRecord("team", team_id, {include: "artists"}),
      clips: clips.toArray().filter(e => e.team === team_id),
    });
  }
}
