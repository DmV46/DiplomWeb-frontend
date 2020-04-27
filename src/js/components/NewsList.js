export default class NewsList {
  constructor(container) {
    this._container = document.querySelector(container);
  }

  renderNews(news, onCreate) {
    this._container.appendChild(onCreate(news));
  }
}
