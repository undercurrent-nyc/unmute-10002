import Route from '@ember/routing/route';
import getYoutubeDescription from "unmute/helpers/get-youtube-description";
import { hash } from "rsvp";

export default class ClipsClipRoute extends Route {
  async model({ id }){
    const clips = await this.store.findAll("clip");
    const clip = clips.toArray().filter(e => e.id === id)[0];
    const description = await getYoutubeDescription(id);
    const team = await this.store.findRecord("team", clip.get("team.id"), { include: "artists" });

    return hash({
      team,
      clip: clips.toArray().filter(e => e.id === id)[0],
      description
    });
  }
}
