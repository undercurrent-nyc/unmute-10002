import Component from '@glimmer/component';
import { action } from "@ember/object";

export default class ClipIconComponent extends Component {
  @action invert(ev) {
    const invertables = ev.target.querySelectorAll(".invertable");
    [...invertables].forEach(invertable => invertable.classList.remove("inverse"));
  }

  @action deinvert(ev) {
    const invertables = ev.target.querySelectorAll(".invertable");
    [...invertables].forEach(invertable => invertable.classList.add("inverse"));
  }
}
