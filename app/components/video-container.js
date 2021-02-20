import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import fetch from "fetch";
import ENV from "unmute/config/environment";

export default class VideoContainerComponent extends Component {

  @tracked description = "";

  async getDescription() {
    const queryUrl = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&id=${this.args.clip.id}&key=${ENV.YOUTUBE_API_KEY}`;
    const response = await fetch(queryUrl);
    const data = await response.json();
    if(data.items.length > 0){
      this.description = data.items[0].snippet.description.split("\n")[0];
    }
  }

  constructor() {
    super(...arguments);
    this.getDescription();
  }
}
