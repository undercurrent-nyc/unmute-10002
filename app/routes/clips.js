import Route from '@ember/routing/route';

export default class ClipsRoute extends Route {
  async model(){
    return this.store.findAll("clip");
  }
}
