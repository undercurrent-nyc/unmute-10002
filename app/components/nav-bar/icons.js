import Component from '@glimmer/component';
import { action } from "@ember/object";
import { tracked } from "@glimmer/tracking";

export default class NavBarIconsComponent extends Component {
  @tracked hiddenDropdown = true;

  @action
  toggleDropdown() {
    console.log("toggling");
    this.hiddenDropdown = !this.hiddenDropdown;
  }

}
