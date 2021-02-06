import Model, { attr } from '@ember-data/model';

export default class ClipModel extends Model {
  // @belongsTo("team") team;
  @attr("string") youtubeId;
}
