import Route from '@ember/routing/route';
import RSVP from "rsvp";

export default class TeamsTeamRoute extends Route {
  async model({ team_id }) {
    const clips = await this.store.findAll("clip");
    // Need to load all teams so relationship filter below works.
    const teams = await this.store.findAll("team", {include: "artists"});
    const team = await this.store.findRecord("team", team_id, { include: "artists" });
    return RSVP.hash({
      team,
      clips: clips.toArray().filter(e => e.team.get("id") === team.get("id")).sort((a, b) => (a.color > b.color) ? 1 : -1).reverse(),

    });
  }

  // afterModel(model) {
  //   if (model.clips.length > 1) {
  //     this.transitionTo(`/team/${model.team.id}/${model.clips[0].id}`);
  //   }
  // }
}
