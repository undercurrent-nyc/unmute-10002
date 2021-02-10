import Component from '@glimmer/component';

export default class ArtistContainerComponent extends Component {
  get teammate() {
    const artists = this.args.artist.team.artists.toArray();
    return artists.filter(a => a.id !== this.args.artist.id)[0];
  }

}
