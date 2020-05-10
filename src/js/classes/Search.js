import BaseComponent from './BaseComponent';

export default class Search extends BaseComponent {
  constructor(container, { submitCallBack }) {
    super(container);
    this._submitCallback = submitCallBack || (() => {});
    this._submitCallback = this._submitCallback.bind(this);
  }

  render() {
    super._render(this._component);
    this._setEventListeners();
  }

  _setEventListeners() {
    this._component.querySelector('.search__form').addEventListener('submit', (event) => {
      this._keyword = this._component.querySelector('.search__form').elements.keyword.value;
      event.preventDefault();
      this._submitCallback(this._keyword);
    });
  }

  get keyword() {
    return this._keyword;
  }
}
