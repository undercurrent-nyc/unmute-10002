import Route from '@ember/routing/route';
import RSVP from "rsvp";

export default class ClipsClipRoute extends Route {
  async model(params){
    const clips = await this.store.findAll("clip");
    return RSVP.hash({
      teams: this.store.findAll("team", {include: "artists"}),
      clip: clips.toArray().filter(e => e.id === params.id)[0],
    });
  }
}
