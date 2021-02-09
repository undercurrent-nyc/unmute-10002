import Route from '@ember/routing/route';
import RSVP from "rsvp";

export default class ClipsRoute extends Route {
  async model(){
    const clips = await this.store.findAll("clip");
    return RSVP.hash({
      clips: clips.toArray().sort(),
      teams: this.store.findAll("team", {include: "artists"})
    });
  }
}
