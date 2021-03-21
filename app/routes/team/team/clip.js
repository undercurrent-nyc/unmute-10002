import Route from '@ember/routing/route';

export default class TeamTeamClipRoute extends Route {
  // This probably gets skipped because of the transition one level up.
  async model({ team_id, clip_id }){
    this.transitionTo(`/teams/${team_id}/${clip_id}`);
  }
}
