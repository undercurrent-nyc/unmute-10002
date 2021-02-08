import Model, { attr, belongsTo } from '@ember-data/model';

export default class ArtistModel extends Model {
  @attr("string") displayName;
  @attr("string") pronouns;
  @attr("string") imgUrl;
  @attr("string") url;
  @attr("string") instagram;
  @attr("string") other;
  @attr("string") country;
  @attr("string") generation;
  @belongsTo("team") team;
}
