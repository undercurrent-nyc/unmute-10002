import Route from '@ember/routing/route';
import RSVP from "rsvp";

export default class ClipsRoute extends Route {
  async model(){
    return RSVP.hash({
      clips: this.store.findAll("clip"),
      teams: this.store.findAll("team", {include: "artists"})
    });
  }
}
