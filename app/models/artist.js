import Model, { belongsTo } from '@ember-data/model';

export default class ArtistModel extends Model {
  @belongsTo("team") team;
}
