import favoritesBlue from '../../images/favorites_blue.svg';

export default class News {
  constructor(template, news, getFormatDate, apiFindNews) {
    this._template = document.querySelector(template).content.querySelector('.result__news');
    this._element = this._template.cloneNode(true);
    this._news = news;
    this._keyWord = null;
    this._articleID = null;
    this._apiFindNews = apiFindNews;
    this._getFormatDate = getFormatDate;
    this._setEventListeners = this._setEventListeners.bind(this);
    this._removeEventListeners = this._removeEventListeners.bind(this);
    this._handlerNewsIcon = this._handlerNewsIcon.bind(this);
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
      this._setEventListeners();
    }

    return this._element;
  }

  get nodeSave() {
    this._element.querySelector('.result__news-link').href = this._news.link;
    this._element.querySelector('.result__news-img').src = this._news.image;
    this._element.querySelector('.result__news-date').textContent = this._getFormatDate(this._news.date);
    this._element.querySelector('.result__news-title').textContent = this._news.title;
    this._element.querySelector('.result__news-text').textContent = this._news.text;
    this._element.querySelector('.result__news-source').textContent = this._news.source;
    this._element.querySelector('.result__news-tooltip').textContent = 'Убрать из сохранённых';
    this._element.querySelector('.result__news-tooltip').classList.remove('roboto_size_extra-small');
    this._element.querySelector('.result__news-tooltip').classList.add('roboto_size_small', 'result__news-tooltip_deleted');

    this._element.insertAdjacentHTML('afterbegin', `<div class="result__keywords">${this._news.keyword}</div>`);
    this._articleID = this._news._id;

    this._setEventListeners();

    return this._element;
  }

  _setEventListeners() {
    this._element.querySelector('.result__news-selected').addEventListener('click', this._handlerNewsIcon);
  }

  _removeEventListeners() {
    this._element.querySelector('.result__news-selected').removeEventListener('click', this._handlerNewsIcon);
  }

  _handlerNewsIcon() {
    if (this._articleID !== null) {
      this._apiFindNews.deleteNews(this._articleID)
        .then(() => {
          if (window.location.href === 'saved_articles') {
            this._element.remove();
            this._removeEventListeners();
          }
        })
        .catch((err) => alert(err));
    } else {
      this._element.querySelector('.result__news-selected-icon').src = favoritesBlue;
      this._element.classList.add('result__news_saved');
      this._apiFindNews.saveNews(this._news, this._keyWord)
        .then((res) => { this._articleID = res._id; })
        .catch((err) => alert(err));
    }
  }

  /**
   * @param {any} keyWord
   */
  set keyword(keyWord) {
    this._keyWord = keyWord;
  }
}
