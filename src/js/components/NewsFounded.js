import News from './News';
import favoritesBlue from '../../images/favorites_blue.svg';

export default class NewsFounded extends News {
  constructor(template, news, getFormatDate, apiFindNews) {
    super(template, news, getFormatDate, apiFindNews);
    this._keyword = null;
    this._articleId = null;
  }

  get node() {
    this._element.querySelector('.result__news-link').href = this._news.url;
    this._element.querySelector('.result__news-img').src = this._news.urlToImage;
    this._element.querySelector('.result__news-date').textContent = this._getFormatDate(this._news.publishedAt);
    this._element.querySelector('.result__news-title').textContent = this._news.title;
    this._element.querySelector('.result__news-text').textContent = this._news.description;
    this._element.querySelector('.result__news-source').textContent = this._news.source.name;

    if (localStorage.getItem('token')) {
      this._element.querySelector('.result__news-tooltip').style.display = 'none';
      // this._setEventListeners();
    }

    return this._element;
  }

  /**
   * @param {any} keyword
   */
  set keyword(keyword) {
    this._keyword = keyword;
  }

  _handlerSaved() {
    this._apiFindNews.saveNews(this._news, this._keyword)
      .then((res) => {
        this._element.querySelector('.result__news-selected-icon').src = favoritesBlue;
        this._element.classList.add('result__news_saved');
        this._articleId = res._id;
      })
      .catch((err) => alert(err));
  }

  // _setEventListeners() {
  //   this._element.querySelector('.result__news-selected').addEventListener('click', this._handlerNewsIcon);
  // }

  // _removeEventListeners() {
  //   this._element.querySelector('.result__news-selected').removeEventListener('click', this._handlerNewsIcon);
  // }
}
