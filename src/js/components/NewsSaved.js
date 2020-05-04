import News from './News';
import deleteArticle from '../../images/delete-article.svg';

export default class NewsSaved extends News {
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

    return this._element;
  }

  // _setEventListeners() {
  //   this._element.querySelector('.result__news-selected').addEventListener('click', this._handlerNewsIcon);
  // }

  // _removeEventListeners() {
  //   this._element.querySelector('.result__news-selected').removeEventListener('click', this._handlerNewsIcon);
  // }
}
