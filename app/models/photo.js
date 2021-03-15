import Model, { attr } from '@ember-data/model';

export default class PhotoModel extends Model {
  @attr("string") imgurUrl;
  @attr("string") credit;
  @attr("number") priority;
}
