import BaseComponent from '../BaseComponent';

export default class Result extends BaseComponent {
  render() {
    super._render(this._component);
  }

  removeChildAll() {
    while (this._component.firstChild) {
      this._component.removeChild(this._component.firstChild);
    }
  }
}
