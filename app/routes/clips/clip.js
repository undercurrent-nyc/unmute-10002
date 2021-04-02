import Route from '@ember/routing/route';
import getYoutubeData from "unmute/helpers/get-youtube-data";
import { hash } from "rsvp";

export default class ClipsClipRoute extends Route {
  async model({ id }){
    const clips = await this.store.findAll("clip");
    const clip = clips.toArray().filter(e => e.id === id)[0];
    const youTubeData = await getYoutubeData(id);
    let team = clip.get("team.id");
    if (team) {
      team = await this.store.findRecord("team", team, { include: "artists" });
    }

    return hash({
      team,
      clip: clips.toArray().filter(e => e.id === id)[0],
      youTubeData
    });
  }
}
