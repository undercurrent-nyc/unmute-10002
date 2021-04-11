import Component from '@glimmer/component';

export default class PodcastTileComponent extends Component {

  get color() {
    const colors = "green brown purple blue red".split(" ");
    return colors[Math.floor(Math.random() * colors.length)];
  }
}
