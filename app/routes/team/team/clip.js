import Route from '@ember/routing/route';
import getYoutubeDescription from "unmute/helpers/get-youtube-description";
import { hash } from "rsvp";

export default class TeamTeamClipRoute extends Route {
  async model({ clip_id }){
    const model = this.modelFor("team.team");
    const clip = model.clips.toArray().filter(e => e.id === clip_id)[0];
    const description = await getYoutubeDescription(clip_id);
    return hash({
      clip,
      description,
    });
  }
}
