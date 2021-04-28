import Component from '@glimmer/component';
import { tracked } from "@glimmer/tracking";
import { action } from "@ember/object";
import { selectAll } from "d3-selection";
import { transition } from "d3-transition";

export default class UnveilingBannerComponent extends Component {
  @tracked isShowing = false;

  @action toggleVideo() {
    this.isShowing = !this.isShowing;
  }

  @action makeWaves() {
    this.animate();
    setInterval(() => {
      console.log("running this.animate");
      this.animate();
    }, 10000);
  }

  animate(){
    selectAll("path.first.wave")
      .transition()
      .delay(1000)
      .style("opacity", 1)
        .on("end", () => {
          selectAll("path.second.wave")
            .transition()
      .delay(700)
            .style("opacity", 1)
            .on("end", () => {
          selectAll("path.third.wave")
            .transition()
      .delay(700)
            .style("opacity", 1)
            .on("end", () => {
            selectAll("path.wave")
              .transition()
      .delay(7000)
              .style("opacity", 0)
              })
            })
        })
  }

}
