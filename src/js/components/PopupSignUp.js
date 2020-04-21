import Popup from './Popup';

const formSignUp = `<form class="popup__form">
    <label class="inter inter_size_small popup__label" for="email">Email</label>
    <input class="inter inter_size_medium popup__input" type="email" name="email" id="email" placeholder="Введите почту" required pattern="^[a-z0-9_-]{2,}(\.[a-z0-9_-]+)*@[a-z0-9_-]{2,}(\.[a-z0-9_-]{2,})*\.[a-z]{2,6}$">
    <span class="inter inter_size_small popup__error"></span>
    <label class="inter inter_size_small popup__label" for="password">Пароль</label>
    <input class="inter inter_size_medium popup__input" type="password" name="password" id="password" placeholder="Введите пароль" required minlength="8">
    <span class="inter inter_size_small popup__error"></span>
    <label class="inter inter_size_small popup__label" for="name">Имя</label>
    <input class="inter inter_size_medium popup__input" type="text" name="name" id="name" placeholder="Введите своё имя" required pattern="^[А-Я]{1}[а-яё]+(\-[А-ЯЁ]{1}[а-яё]+)?$" minlength="2" maxlength="30">
    <span class="popup__error"></span>
    <span class="inter inter_size_small popup__error popup__error_submit"></span>
    <button class="button popup__button popup__button_sign-up" type="submit" disabled>Зарегистрироваться</button>
    <p class="inter inter_size_medium popup__text">или <span class="popup__link">Войти</span></p>
  </form>`;

export default class PopupSignUp extends Popup {
  constructor(selector, container) {
    super(selector, container);
    this._label = null;
    this._showMobMenu = this._showMobMenu.bind(this);
  }

  open(contentSignIn, labelMenuHeader) {
    this._label = labelMenuHeader;
    this._element.querySelector('.popup__title').textContent = 'Регистрация';
    this._element.querySelector('.popup__content').insertAdjacentHTML('beforeend', formSignUp);
    this._element.querySelector('.popup__link').addEventListener('click', () => super._heandlerChange(contentSignIn));
    this._setEventListeners();

    super.open();
  }

  _setEventListeners() {
    if (document.body.clientWidth <= 320) {
      this._element.querySelector('.popup__close').addEventListener('click', this._showMobMenu);
    }
    super._setEventListeners();
  }

  _removeEventListeners() {
    this._element.querySelector('.popup__close').removeEventListener('click', this._showMobMenu);
    super._removeEventListeners();
  }

  _showMobMenu() {
    this._label.style.display = 'block';
  }
}
