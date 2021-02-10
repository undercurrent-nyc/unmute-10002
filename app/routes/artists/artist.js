import Route from '@ember/routing/route';

export default class ArtistsArtistRoute extends Route {
  async model({ id }){
    return this.store.findRecord("artist", id, { include: "team,team.artists" });
  }
}
