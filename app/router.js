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
  this.route('teams');
  this.route('artists', function() {
    this.route('artist', { path: '/:id' });
  });

  this.route('team', function() {
    this.route('team', { path: '/:team_id' });
  });
});
