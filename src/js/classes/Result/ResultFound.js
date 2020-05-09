import BaseComponent from '../BaseComponent';

const resultFound = `
<h2 class="roboto-slab roboto-slab_size_large result__title" >Результаты поиска</h2>
<div class="result__container result__container_position_large"></div>
<button class="button result__button-more">Показать еще</button>`;

export default class ResultFound extends BaseComponent {
  constructor(container, { moreNewsCallBack }) {
    super(container);
    this._getMoreNews = moreNewsCallBack || (() => {});
  }

  render() {
    super._createComponent(
      'div',
      ['result__found'],
      resultFound,
    );
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
