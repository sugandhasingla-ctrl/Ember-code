import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class HomeController extends Controller {
  @service router;

  @action
  goToAbout() {
    this.router.transitionTo('about');
  }

  @action
  goToContact() {
    this.router.transitionTo('contact');
  }
}
