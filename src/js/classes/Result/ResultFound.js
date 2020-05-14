import BaseComponent from '../BaseComponent';

export default class ResultFound extends BaseComponent {
  render(container) {
    this._container = document.querySelector(container);
    super._render(this._component);
    this._list = [];
    this._countNews = 0;
    this._newsList = this._component.querySelector('.result__container');
    this._setEventListenters();
  }

  clearContainer() {
    while (this._newsList.firstChild) {
      this._newsList.removeChild(this._newsList.firstChild);
    }
  }

  /**
   * @param {(arg0: any) => void} arrayNews
   */
  set list(arrayNews) {
    if (this._list.length !== 0) {
      this._list = [];
    }
    this._list = this._list.concat(arrayNews);
  }

  get list() {
    return this._list;
  }

  set countNews(countNews) {
    this._countNews = countNews;
  }

  get countNews() {
    return this._countNews;
  }

  set callbacks(callbacks) {
    this._callbacks = callbacks;
    this._getMoreNews = this._callbacks.moreNewsCallBack || (() => {});
  }

  _setEventListenters() {
    this._component.querySelector('.result__button-more').addEventListener('click', this._getMoreNews);
  }
}
