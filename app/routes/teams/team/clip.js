import Route from '@ember/routing/route';
import getYoutubeDescription from "unmute/helpers/get-youtube-description";
import { hash } from "rsvp";

export default class TeamsTeamClipRoute extends Route {

  async model({ clip_id }){
    const clips = await this.store.findAll("clip");
    const clip = clips.toArray().filter(e => e.id === clip_id)[0];
    const team = await this.store.findRecord("team", clip.get("team.id"), { include: "artists" });
    const description = await getYoutubeDescription(clip_id);
    return hash({
      team,
      clip,
      description,
    });
  }

}
