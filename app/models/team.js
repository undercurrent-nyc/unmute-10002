import Model, { attr, hasMany } from '@ember-data/model';

export default class TeamModel extends Model {
  @attr("string") name;
  @attr("string") color;
  @hasMany("artist") artists;
  @hasMany("clip") clips;
}
