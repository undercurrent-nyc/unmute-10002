import Component from '@glimmer/component';
import StickySidebar from "sticky-sidebar";

export default class StickySidebarComponent extends Component {
  constructor() {
    super(...arguments);
    const sidebar = new StickySidebar(".sticky-sidebar");
  }
}
