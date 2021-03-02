import Component from '@glimmer/component';
import { action } from "@ember/object";
import { tracked } from "@glimmer/tracking";
import { toLeft } from 'ember-animated/transitions/move-over';

export default class CarouselBackgroundComponent extends Component {

  @tracked
  activePhoto = this.randomPhoto

  @action
  rules() {
    return toLeft;
  }

  get randomPhoto() {
    return this.args.photos.objectAt(Math.floor(Math.random() * this.args.photos.length));
  }

  get delay() {
    return Math.floor(Math.random() * 5000 + 1000 + this.transitionDuration);
  }

  transitionDuration = 900;

  updatePhoto() {
    console.log("updating");
    this.activePhoto = this.args.photos.lastObject;
  }

  @action
  startCarousel() {
    setTimeout(() => {
      this.activePhoto = this.randomPhoto;
      this.startCarousel();
    }, this.delay)
  }

}
