export default class News {
  constructor(template, news, getFormatDate, apiFindNews) {
    this._template = document.querySelector(template).content.querySelector('.result__news');
    this._element = this._template.cloneNode(true);
    this._news = news;
    this._apiFindNews = apiFindNews;
    this._getFormatDate = getFormatDate;
  }

  _delete(newsId) {
    this._apiFindNews.deleteNews(newsId)
      .catch((err) => alert(err));
  }
}
