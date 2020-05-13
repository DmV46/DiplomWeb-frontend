import favorites from '../../../images/favorites.svg';
import News from './News';

export default class NewsFounded extends News {
  constructor(container) {
    super(container);
    this._keyword = null;
    this._articleId = null;
    this._handlerFavorites = this._handlerFavorites.bind(this);
    this._createComponent();
  }

  _createComponent() {
    super._createComponent();
    this._component.querySelector('.result__news-selected').style.backgroundImage = favorites;
    this._component.querySelector('.result__news-tooltip').textContent = 'Войдите, чтобы сохранять статьи';
    this._component.querySelector('.result__news-tooltip').classList.add('roboto_size_extra-small');
  }


  render(news) {
    this._news = news;
    this._component.querySelector('.result__news-link').href = this._news.url;
    this._component.querySelector('.result__news-img').src = this._news.urlToImage;
    this._component.querySelector('.result__news-date').textContent = this._getFormatDate(this._news.publishedAt);
    this._component.querySelector('.result__news-title').textContent = this._news.title;
    this._component.querySelector('.result__news-text').textContent = this._news.description;
    this._component.querySelector('.result__news-source').textContent = this._news.source.name;

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
    this._handlersaveNews = this._callbacks.saveNewsCallback || (() => {});
    this._handlerdeleteNews = this._callbacks.deleteNewsCallback || (() => {});
  }

  _handlerFavorites(event) {
    if (this._articleId === null) {
      this._handlersaveNews(event, this._news, this._keyword);
      return;
    }
    this._handlerdeleteNews(event, this._articleId);
  }

  _setEventListeners() {
    this._component.querySelector('.result__news-selected').addEventListener('click', this._handlerFavorites);
  }
}
