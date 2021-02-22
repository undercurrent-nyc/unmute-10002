import Route from '@ember/routing/route';
import getYoutubeDescription from "unmute/helpers/get-youtube-description";
import { hash } from "rsvp";

export default class ClipsClipRoute extends Route {
  async model({ id }){
    const clips = await this.store.findAll("clip");
    const description = await getYoutubeDescription(id);
    return hash({
      clip: clips.toArray().filter(e => e.id === id)[0],
      description
    });
  }
}
