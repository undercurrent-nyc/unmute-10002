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

  get listenIcon() {
    if (this.isMuted) {
      return "muted-icon";
    }

    return "listen-icon";
  }

  audio = null;

  @tracked volumeLevel = 100;

  @tracked currentTime = "00:00"

  @tracked currentSeconds = 0;

  @tracked duration = "--:--";

  @tracked seekSliderMax = 0;

  @tracked isPlaying = false;

  @tracked isMuted = false;

  @action updateCurrentSeconds({ target }) {
    this.currentSeconds = target.currentTime;
    this.currentTime = this.convertTime(this.currentSeconds);
  }

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
    if(this.isPlaying){
      this.audio.pause();
    } else {
      this.audio.play();
    }
    this.isPlaying = !this.isPlaying;
  }

  @action
  backButton(){
    const newTime = this.audio.currentTime - 30;
    this.audio.currentTime = newTime;
    this.currentTime = this.convertTime(newTime);
  }

  @action
  forwardButton(){
    const newTime = this.audio.currentTime + 30;
    this.audio.currentTime = newTime;
    this.currentTime = this.convertTime(newTime);
  }

  @action
  listenButton(){
    if(this.isMuted){
      this.audio.muted = false;
    } else {
      this.audio.muted = true;
    }
    this.isMuted = !this.isMuted;
  }

  @action 
  showRangeProgress({ target }) {
    const player = document.getElementsByClassName("player")[0];
    if(target.id === "seek-slider"){
      player.style.setProperty('--seek-before-width', target.value / target.max * 100 + '%');
      this.currentTime = this.convertTime(target.value);
      this.audio.currentTime = target.value;
    } else {
      player.style.setProperty('--volume-before-width', target.value / target.max * 100 + '%');
      this.volumeLevel = target.value;
      this.audio.volume = target.value / 100;
    }

  }

  convertTime(seconds) {
    return `${(Math.floor(seconds / 60)).toString().padStart(2, "0")}:${(Math.floor(seconds % 60)).toString().padStart(2, "0")}`;
  }

  @action initializeAudio() {
    this.audio = document.getElementsByClassName("audio-player")[0];
    if('mediaSession' in navigator) {
    navigator.mediaSession.metadata = new MediaMetadata({
        title: this.args.episode.title,
        artist: "Undercurrent",
        album: "Adriana Furlong & Moacir P. de Sá Pereira",
        src: this.args.episode.sound,
        artwork: [
            { src: this.args.episode.imageURL, sizes: '96x96', type: 'image/png' },
            { src: this.args.episode.imageURL, sizes: '128x128', type: 'image/png' },
            { src: this.args.episode.imageURL, sizes: '192x192', type: 'image/png' },
            { src: this.args.episode.imageURL, sizes: '256x256', type: 'image/png' },
            { src: this.args.episode.imageURL, sizes: '384x384', type: 'image/png' },
            { src: this.args.episode.imageURL, sizes: '512x512', type: 'image/png' }
        ]
    });
    navigator.mediaSession.setActionHandler('play', () => {
        if(this.isPlaying) {
            this.audio.play();
            this.isPlaying = false;
        } else {
            this.audio.pause();
            this.isPlaying = true;
        }
    });
    navigator.mediaSession.setActionHandler('pause', () => {
        if(this.isPlaying) {
            this.audio.play();
            this.isPlaying = false;
        } else {
            this.audio.pause();
            this.isPlaying = true;
        }
    });
    navigator.mediaSession.setActionHandler('seekbackward', (details) => {
        this.audio.currentTime = this.audio.currentTime - (details.seekOffset || 10);
    });
    navigator.mediaSession.setActionHandler('seekforward', (details) => {
        this.audio.currentTime = this.audio.currentTime + (details.seekOffset || 10);
    });
    navigator.mediaSession.setActionHandler('seekto', (details) => {
        if (details.fastSeek && 'fastSeek' in this.audio) {
          this.audio.fastSeek(details.seekTime);
          return;
        }
        this.audio.currentTime = details.seekTime;
    });

    const player = document.getElementsByClassName("player")[0];
    navigator.mediaSession.setActionHandler('stop', () => {
        this.audio.currentTime = 0;
        this.currentSeconds = 0;
        player.style.setProperty('--seek-before-width', '0%');
        if(!this.isPlaying) {
            this.isPlaying = true;
        }
    });
}
  }


}
