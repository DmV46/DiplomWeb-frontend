import News from './News';
import deleteArticle from '../../images/delete-article.svg';

export default class NewsSaved extends News {
  constructor(template, news, getFormatDate, apiFindNews) {
    super(template, news, getFormatDate, apiFindNews);
    this._handlerDelete = this._handlerDelete.bind(this);
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
    this._element.querySelector('.result__news-selected-icon').src = deleteArticle;
    this._element.insertAdjacentHTML('afterbegin', `<div class="result__keywords">${this._news.keyword}</div>`);
    this._setEventListeners();

    return this._element;
  }

  _delete() {
    super._delete(this._news._id);
    this._element.remove();
    this._removeEventListeners();
  }

  _handlerDelete() {
    this._delete();
  }

  _setEventListeners() {
    this._element.querySelector('.result__news-selected').addEventListener('click', this._handlerDelete);
  }

  _removeEventListeners() {
    this._element.querySelector('.result__news-selected').removeEventListener('click', this._handlerDelete);
  }
}
