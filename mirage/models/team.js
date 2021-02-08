import { Model, hasMany } from 'ember-cli-mirage';

export default Model.extend({
  clips: hasMany(),
  artists: hasMany(),
});
