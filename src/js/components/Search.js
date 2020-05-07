export default class Search {
  constructor(selector, { submitCallBack }) {
    this._form = document.querySelector(selector);
    this._submitCallback = submitCallBack;
    this._setEventListeners();

    this._hendlerSubmit = this._hendlerSubmit.bind(this);
  }

  _hendlerSubmit(event, keyword) {
    event.preventDefault();
    this._submitCallback(keyword);
  }

  _setEventListeners() {
    this._form.addEventListener('submit', (event) => {
      const keyword = this._form.elements.keyword.value;
      this._hendlerSubmit(event, keyword);
    });
  }
}
