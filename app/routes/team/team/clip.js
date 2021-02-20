import Route from '@ember/routing/route';

export default class TeamTeamClipRoute extends Route {
  async model({ clip_id }){
    const clips = await this.store.findAll("clip");
    return clips.toArray().filter(e => e.id === clip_id)[0];
  }
}
