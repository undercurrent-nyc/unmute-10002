import Route from '@ember/routing/route';
import RSVP from "rsvp";
import fetch from "fetch";
import ENV from "unmute/config/environment";
import { htmlSafe } from '@ember/template';

export default class ClipsClipRoute extends Route {
  async model(params){
    const queryUrl = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&id=${params.id}&key=${ENV.YOUTUBE_API_KEY}`;
    const response = await fetch(queryUrl);
    const data = await response.json();
    let description = "";
    console.log(data);
    if(data.items.length > 0){
      description = htmlSafe(data.items[0].snippet.description.replaceAll(/\n/g, "<br />"));
    }
    const clips = await this.store.findAll("clip");
    return RSVP.hash({
      teams: this.store.findAll("team", {include: "artists"}),
      clip: clips.toArray().filter(e => e.id === params.id)[0],
      description
    });
  }
}
