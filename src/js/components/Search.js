export default class Search {
  constructor(selector, { SubmitCallback }) {
    this._form = document.querySelector(selector);
    this._hendlerSubmitCallback = SubmitCallback;
  }

  _setEventListeners() {
    this._form.addEventListeners('submit', this._hendlerSubmitCallback);
  }
}
