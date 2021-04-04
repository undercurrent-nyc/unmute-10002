import Model, { attr, belongsTo } from '@ember-data/model';

export default class ConsultantModel extends Model {
  @attr("string") displayName;
  @attr("string") pronouns;
  @attr("string") imgUrl;
  @attr("string") url;
  @attr("string") instagram;
  @attr("string") facebook;
  @belongsTo("team", { async: false }) team;
}
