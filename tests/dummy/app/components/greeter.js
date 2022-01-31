import { service } from '@ember/service';
import Component from '@glimmer/component';

export default class GreeterComponent extends Component {
  @service hello;
}
