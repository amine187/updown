import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL,
  model() {
  }
});

Router.map(function () {
  this.route('checks', { path: '/' });
});

export default Router;
