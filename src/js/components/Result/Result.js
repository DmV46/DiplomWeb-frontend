import BaseComponent from '../BaseComponent';

export default class Result extends BaseComponent {
  render() {
    super._createComponent(
      'section',
      ['result', 'result_founded', 'result_unvisible'],
    );
    super._render(this._component);
  }
}
