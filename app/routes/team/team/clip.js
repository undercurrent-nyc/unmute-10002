import Route from '@ember/routing/route';
import RSVP from "rsvp";
import fetch from "fetch";
import ENV from "unmute/config/environment";

export default class TeamTeamClipRoute extends Route {
  async model({ clip_id }){
    const queryUrl = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&id=${clip_id}&key=${ENV.YOUTUBE_API_KEY}`;
    const response = await fetch(queryUrl);
    const data = await response.json();
    let description = "";
    if(data.items.length > 0){
      description = data.items[0].snippet.description.split("\n")[0];
    }
    const clips = await this.store.findAll("clip");
    const clip = clips.toArray().filter(e => e.id === clip_id)[0];
    // Need to load all teams so relationship filter below works.
    const teams = await this.store.findAll("team", {include: "artists"});
    return RSVP.hash({
      clip,
      description
    });
  }
}
