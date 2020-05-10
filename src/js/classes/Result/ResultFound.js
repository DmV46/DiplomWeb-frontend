import BaseComponent from '../BaseComponent';

export default class ResultFound extends BaseComponent {
  constructor({ moreNewsCallBack }) {
    super();
    this._getMoreNews = moreNewsCallBack || (() => {});
  }

  render(container) {
    this._container = document.querySelector(container);
    super._render(this._component);
    this._list = [];
    this._countNews = 0;
    this._newsList = this._component.querySelector('.result__container');
    this._setEventListenters();
  }

  renderNews(news, onCreate) {
    this._newsList.appendChild(onCreate(news));
    this._countNews += 1;
  }

  /**
   * @param {(arg0: any) => void} arrayNews
   */
  set addNews(arrayNews) {
    if (this._list.length !== 0) {
      this._list = [];
    }
    this._list = this._list.concat(arrayNews);
  }

  get list() {
    return this._list;
  }

  get countNews() {
    return this._countNews;
  }

  _setEventListenters() {
    this._component.querySelector('.result__button-more').addEventListener('click', this._getMoreNews);
  }
}
