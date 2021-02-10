import Component from '@glimmer/component';
import { action } from "@ember/object";

export default class ArtistTileComponent extends Component {
  @action hideName(ev) {
    console.log("hiding name");
    console.log(ev.target);
    const nameTile = ev.target.querySelector(".name-tile");
    nameTile.classList.remove("visible")
    nameTile.classList.add("invisible");
  }

  @action showName(ev) {
    console.log("showing name");
    console.log(ev.target);
    const nameTile = ev.target.querySelector(".name-tile");
    nameTile.classList.remove("invisible")
    nameTile.classList.add("visible");
  }
}
