import BaseComponent from '../BaseComponent';

export default class ResultPreloader extends BaseComponent {
  render(container) {
    this._container = document.querySelector(container);
    super._render(this._component);
  }
}
