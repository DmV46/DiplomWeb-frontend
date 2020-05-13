import deleteArticle from '../../../images/delete-article.svg';
import News from './News';

export default class NewsSaved extends News {
  constructor(container) {
    super(container);
    this._handlerDelete = this._handlerDelete.bind(this);
    this._createComponent();
  }

  _createComponent() {
    super._createComponent();
    this._component.querySelector('.result__news-selected').style.backgroundImage = `url(.${deleteArticle})`;
    this._component.querySelector('.result__news-tooltip').textContent = 'Убрать из сохранённых';
    this._component.querySelector('.result__news-tooltip').classList.add('roboto_size_small', 'result__news-tooltip_deleted');
  }

  render(news) {
    this._newsId = news._id;
    this._component.querySelector('.result__news-link').href = news.link;
    this._component.querySelector('.result__news-img').src = news.image;
    this._component.querySelector('.result__news-date').textContent = this._getFormatDate(news.date);
    this._component.querySelector('.result__news-title').textContent = news.title;
    this._component.querySelector('.result__news-text').textContent = news.text;
    this._component.querySelector('.result__news-source').textContent = news.source;
    this._component.insertAdjacentHTML('afterbegin', `<div class="result__keywords">${news.keyword}</div>`);
    this._setEventListeners();

    super._render(this._component);
  }

  set callbacks(callbacks) {
    this._callbacks = callbacks;

    this._getFormatDate = this._callbacks.getFormatDateCallback || (() => {});
    this._deleteNews = this._callbacks.deleteNewsCallback || (() => {});
  }

  _handlerDelete(event) {
    this._deleteNews(event, this._newsId);
    this._component.remove();
    this._removeEventListeners();
  }

  _setEventListeners() {
    this._component.querySelector('.result__news-selected').addEventListener('click', this._handlerDelete);
  }

  _removeEventListeners() {
    this._component.querySelector('.result__news-selected').removeEventListener('click', this._handlerDelete);
  }
}
