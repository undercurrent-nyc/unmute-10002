import Route from '@ember/routing/route';
import RSVP from "rsvp";

export default class TeamTeamRoute extends Route {
  model({ team_id }) {
    this.transitionTo(`/teams/${team_id}`);
  }
}
