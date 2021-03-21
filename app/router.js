import EmberRouter from "@ember/routing/router";
import config from "unmute/config/environment";

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('about');
  this.route('clips', function() {
    this.route('clip', { path: '/:id' });
  });
  this.route('teams', function() {
  });
  this.route('teams.team', { path: '/teams/:team_id' },function() {
    this.route('clip', { path: '/:clip_id' });
  });
  this.route('artists.artist', { path: '/artists/:id' });
  this.route('artists');
  this.route('team', function() {
    this.route('team', { path: '/:team_id' }, function() {
      this.route('clip', {path:'/:clip_id' });
    });
  });
});
