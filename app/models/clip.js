import Model, { belongsTo, attr } from '@ember-data/model';

export default class ClipModel extends Model {
  @belongsTo("team", { async: false }) team;
  @attr("string") youtubeUrl;
}
