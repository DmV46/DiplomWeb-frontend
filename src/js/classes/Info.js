import BaseComponent from './BaseComponent';

export default class Info extends BaseComponent {
  render() {
    super._render(this._component);
  }

  updateInfo(arrayKeyword) {
    this._clearContainer();
    if (arrayKeyword.length !== 0) {
      if (arrayKeyword.length > 3) {
        this._renderKeyword(arrayKeyword[0][0]);
        this._renderKeyword(arrayKeyword[1][0]);
        this._renderComma();
        this._renderOther(arrayKeyword.length);
      } else {
        this._renderKeyword(arrayKeyword[0][0]);
        for (let i = 1; i < arrayKeyword.length; i++) {
          this._renderKeyword(arrayKeyword[i][0]);
          this._renderComma();
        }
      }
    }
  }

  _clearContainer() {
    this._component.querySelector('.info__subtitle').textContent = 'По ключевым словам: ';
  }

  _renderKeyword(keyword) {
    this._component.querySelector('.info__subtitle').insertAdjacentHTML('beforeend', `<span class="info__keywords">${keyword}</span>`);
  }

  _renderComma() {
    this._component.querySelector('.info__subtitle').lastElementChild.insertAdjacentHTML('afterbegin', ', ');
  }

  _renderOther(arrayKeyword) {
    this._component.querySelector('.info__subtitle').insertAdjacentHTML('beforeend', ` и <span class="info__keywords">${arrayKeyword - 2} другим</span>`);
  }

  /**
   * @param {any} user
   */
  set user(user) {
    this._user = user;
    this._component.querySelector('.info__user').textContent = this._user;
  }

  set countNews(countNews) {
    this._countNews = countNews;
    this._component.querySelector('.info__count-news').textContent = this._countNews;
    this._component.querySelector('.info__suffix').textContent = 'сохранненных';
    this._component.querySelector('.info__suffix_2').textContent = 'статей';

    if (this.countNews === 0) {
      this._component.querySelector('.info__suffix').textContent = 'сохранненных';
      this._component.querySelector('.info__suffix_2').textContent = 'статей';
    }
    if (this.countNews === 1) {
      this._component.querySelector('.info__suffix').textContent = 'сохранненная';
      this._component.querySelector('.info__suffix_2').textContent = 'статья';
    }
    if (this._countNews >= 2 && this._countNews <= 4) {
      this._component.querySelector('.info__suffix').textContent = 'сохранненных';
      this._component.querySelector('.info__suffix_2').textContent = 'статьи';
    }
  }

  get countNews() {
    return this._countNews;
  }
}
