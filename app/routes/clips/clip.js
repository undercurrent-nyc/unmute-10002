import Route from '@ember/routing/route';

export default class ClipsClipRoute extends Route {
  async model({ id }){
    const clips = await this.store.findAll("clip");
    return clips.toArray().filter(e => e.id === id)[0];
  }
}
