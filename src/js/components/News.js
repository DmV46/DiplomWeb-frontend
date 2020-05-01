export default class News {
  constructor(template, news, getFormatDate) {
    this._template = document.querySelector(template).content.querySelector('.result__news');
    this._element = this._template.cloneNode(true);
    this._source = news.source.name;
    this._title = news.title;
    this._description = news.description;
    this._publishedAt = news.publishedAt;
    this._url = news.url;
    this._urlToImage = news.urlToImage;
    this._keyWord = null;
    this._getFormatDate = getFormatDate;
  }

  get node() {
    this._element.querySelector('.result__news-link').href = this._url;
    this._element.querySelector('.result__news-img').src = this._urlToImage;
    this._element.querySelector('.result__news-date').textContent = this._getFormatDate(this._publishedAt);
    this._element.querySelector('.result__news-title').textContent = this._title;
    this._element.querySelector('.result__news-text').textContent = this._description;
    this._element.querySelector('.result__news-source').textContent = this._source;

    return this._element;
  }

  /**
   * @param {any} keyWord
   */
  set keyword(keyWord) {
    this._keyWord = keyWord;
  }
}
