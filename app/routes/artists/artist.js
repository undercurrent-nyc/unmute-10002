import Route from '@ember/routing/route';
import RSVP from "rsvp";

export default class ArtistsArtistRoute extends Route {
  async model({ id }){
    const artist = await this.store.findRecord("artist", id, { include: "team,team.artists" });
    const clips = await this.store.findAll("clip");
    return RSVP.hash({
      artist,
      clips: clips.toArray().filter(e => e.team.get("id") === artist.team.get("id")).sort((a, b) => (a.color > b.color) ? 1 : -1).reverse(),

    });
  }
}
