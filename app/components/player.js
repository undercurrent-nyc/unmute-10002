import Component from '@glimmer/component';
import { tracked } from "@glimmer/tracking";
import { action } from "@ember/object";

export default class PlayerComponent extends Component {
  get playIcon() {
    if (this.isPlaying) {
      return "pause"
    }

    return "play";
  }

  @tracked currentTime = "00:00"

  @tracked duration = "00:00";

  @tracked seekSliderMax = 0;

  @tracked isPlaying = false;

  @action parseMetadata({ target }){
    this.duration = this.convertTime(target.duration);
    this.seekSliderMax = target.duration;
    // console.log(target.id);
    // console.log(target.buffered);
    // console.log(target.buffered.end(target.buffered.length - 1));
    // console.log(target.seekable);
    // console.log(target.seekable.end(target.seekable.length - 1));
  }

  @action
  playButton(){
    const audio = document.getElementsByClassName("audio-player")[0]
    if(this.isPlaying){
      audio.pause();
    } else {
      audio.play();
    }
    this.isPlaying = !this.isPlaying;
  }

  @action 
  showRangeProgress({ target }) {
    const player = document.getElementsByClassName("player")[0];
    if(target.id === "seek-slider"){
      player.style.setProperty('--seek-before-width', target.value / target.max * 100 + '%');
      this.currentTime = this.convertTime(target.value);
    } else {
      player.style.setProperty('--volume-before-width', target.value / target.max * 100 + '%');
    }

  }

  convertTime(seconds) {
    return `${(Math.floor(seconds / 60)).toString().padStart(2, "0")}:${(Math.floor(seconds % 60)).toString().padStart(2, "0")}`;
  }

}
