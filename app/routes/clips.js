import Route from '@ember/routing/route';
import RSVP from "rsvp";

export default class ClipsRoute extends Route {
  async model(){
    const clips = await this.store.findAll("clip");
    return RSVP.hash({
      clips: clips.toArray().sort((a, b) => (a.color > b.color) ? 1 : -1).reverse(),
      teams: this.store.findAll("team", {include: "artists"})
    });
  }
}
