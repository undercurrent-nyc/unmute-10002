import Route from '@ember/routing/route';
import RSVP from "rsvp";
import fetch from "fetch";
import ENV from "unmute/config/environment";

export default class ClipsClipRoute extends Route {
  async model(params){
    const queryUrl = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&id=${params.id}&key=${ENV.YOUTUBE_API_KEY}`;
    const response = await fetch(queryUrl);
    const data = await response.json();
    let description = "";
    if(data.items.length > 0){
      description = data.items[0].snippet.description.split("\n")[0];
    }
    const clips = await this.store.findAll("clip");
    return RSVP.hash({
      teams: this.store.findAll("team", {include: "artists"}),
      clip: clips.toArray().filter(e => e.id === params.id)[0],
      description
    });
  }
}
