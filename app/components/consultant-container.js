import Component from '@glimmer/component';
import { tracked } from "@glimmer/tracking";
import { action } from "@ember/object";

export default class ConsultantContainerComponent extends Component {
  @tracked moreShown = false;

  @action showMore() {
    this.moreShown = !this.moreShown
  };

}
