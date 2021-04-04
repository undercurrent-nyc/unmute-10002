import Model, { attr, belongsTo, hasMany } from '@ember-data/model';

export default class TeamModel extends Model {
  @attr("string") name;
  @attr("string") color;
  @hasMany("artist", { async: false }) artists;
  @hasMany("clip", { async: false }) clips;
  @belongsTo("consultant", { async: false }) consultant;
}
