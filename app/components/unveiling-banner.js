import Component from '@glimmer/component';
import { tracked } from "@glimmer/tracking";
import { action } from "@ember/object";

export default class UnveilingBannerComponent extends Component {
  @tracked isShowing = false;

  @action toggleVideo() {
    this.isShowing = !this.isShowing;
  }

}
