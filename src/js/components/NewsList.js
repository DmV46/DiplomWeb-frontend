export default class NewsList {
  constructor(container) {
    this._container = document.querySelector(container);
    this._list = [];
    this._countAdded = 0;
  }

  renderNews(news, onCreate) {
    this._container.appendChild(onCreate(news));
    this._countAdded += 1;
  }

  clearContainer() {
    this._container.innerHTML = '';
  }

  clearCounter() {
    this._countAdded = 0;
  }

  /**
   * @param {(arg0: any) => void} arrayNews
   */
  set add(arrayNews) {
    if (this._list.length !== 0) {
      this._list = [];
    }
    this._list = this._list.concat(arrayNews);
  }

  get list() {
    return this._list;
  }

  get counter() {
    return this._countAdded;
  }
}
