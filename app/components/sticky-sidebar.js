import Component from '@glimmer/component';
import { action } from "@ember/object";
import StickySidebar from "sticky-sidebar";

export default class StickySidebarComponent extends Component {
  @action makeSticky() {
    const sidebar = new StickySidebar("aside.sticky-sidebar", {
      topSpacing: 210,
      bottomSpacing: 300,
      containerSelector: ".sticky-sidebar-container",
    });
  }
}
