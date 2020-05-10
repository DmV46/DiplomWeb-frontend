import favorites from '../../../images/favorites.svg';
import BaseComponent from '../BaseComponent';

export default class NewsFounded extends BaseComponent {
  constructor(container) {
    super(container);
    this._keyword = null;
    this._articleId = null;
    this._handlerFavorites = this._handlerFavorites.bind(this);
    this._createComponent();
  }

  _createComponent() {
    super.createComponent(
      'div',
      ['result__news'],
      `
      <a class="result__news-link" href="#" target="_blank"></a>
      <div class="result__news-selected">
        <span class="roboto roboto_size_extra-small roboto_weight_medium result__news-tooltip">Войдите, чтобы сохранять статьи</span>
        <img class="result__news-selected-icon" src="${favorites}" alt="favorites">
      </div>
      <div class="result__news-img-container">
        <img class="result__news-img" src="" alt="news-image">
      </div>
      <div class="result__news-description" >
        <p class="source-sans-pro source-sans-pro_size_medium result__news-date"></p>
        <p class="roboto-slab roboto-slab_size_medium result__news-title"></p>
        <div class="roboto roboto_size_large result__news-text"></div>
        <p class="roboto-slab roboto-slab_size_extra-small result__news-source"></p>
      </div>`,
    );
  }


  render(news) {
    this._component.querySelector('.result__news-link').href = news.url;
    this._component.querySelector('.result__news-img').src = news.urlToImage;
    this._component.querySelector('.result__news-date').textContent = this._getFormatDate(news.publishedAt);
    this._component.querySelector('.result__news-title').textContent = news.title;
    this._component.querySelector('.result__news-text').textContent = news.description;
    this._component.querySelector('.result__news-source').textContent = news.source.name;

    if (localStorage.getItem('token')) {
      this._component.querySelector('.result__news-tooltip').style.display = 'none';
      this._setEventListeners();
    }

    super._render(this._component);
  }

  /**
   * @param {any} keyword
   */
  set keyword(keyword) {
    this._keyword = keyword;
  }

  /**
   * @param {any} articleId
   */
  set articleId(articleId) {
    this._articleId = articleId;
  }

  set callbacks(callbacks) {
    this._callbacks = callbacks;

    this._getFormatDate = this._callbacks.getFormatDateCallback || (() => {});
    this._saveNews = this._callbacks.saveNewsCallback || (() => {});
    this._deleteNews = this._callbacks.deleteNewsCallback || (() => {});
  }

  _handlerFavorites() {
    if (this._articleId === null) {
      this._saveNews(this._news, this._keyword);
      return;
    }
    this._deleteNews(this._articleId);
  }

  _setEventListeners() {
    this._component.querySelector('.result__news-selected').addEventListener('click', this._handlerFavorites);
  }
}
