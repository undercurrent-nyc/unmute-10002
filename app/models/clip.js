import Model, { belongsTo, attr } from '@ember-data/model';

export default class ClipModel extends Model {
  @belongsTo("team", { async: true }) team;
  @attr("string") youtubeUrl;
  @attr("string") date;
  @attr("string") noTeamTitle;
}
