import EmberRouter from "@ember/routing/router";
import config from "unmute/config/environment";

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route("coming-soon");
  this.route("welcome-screen");
  this.route('footer-test');
});
