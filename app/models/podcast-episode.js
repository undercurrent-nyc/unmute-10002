import Model, { attr } from '@ember-data/model';

export default class PodcastEpisodeModel extends Model {
  @attr("string") sound;
  @attr("string") color;
  @attr("string") url;
  @attr("string") imageURL;
  @attr("string") title;
  @attr("string") streamInfo;
  @attr("string") duration;
  @attr("string") postDate;
}
