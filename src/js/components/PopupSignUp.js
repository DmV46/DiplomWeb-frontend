import Popup from './Popup';
import iconClose from '../../images/close.svg';

const formSignUp = `<img src="${iconClose}" alt="close" class="popup__close">
  <h1 class="roboto roboto_size_extra-extra-large roboto_weight_black popup__title">Регистрация</h1>
  <form class="popup__form">
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
    <button class="button popup__button popup__button_sign-up" type="submit">Зарегистрироваться</button>
    <p class="inter inter_size_medium popup__text">или <span class="popup__link">Войти</span></p>
  </form>`;

export default class PopupSignUp extends Popup {
  constructor(selector, container, popupSignIn, popupSuccess, header, apiFindNews) {
    super(selector, container);
    this._header = header;
    this._popupSignIn = popupSignIn;
    this._popupSuccess = popupSuccess;
    this._apiFindNews = apiFindNews;
    this._heandlerSubmit = this._heandlerSubmit.bind(this);
  }

  open() {
    super.open();
    this._setEventListeners();
    if (document.body.clientWidth <= 414) {
      this._header.hideMobileMenu();
    }
  }

  _setContent() {
    super._setContent();
    this._element.querySelector('.popup__content').innerHTML = formSignUp;
  }

  _close() {
    if (document.body.clientWidth <= 414) {
      this._header.showMobileMenu();
    }
    super._close();
  }

  _setEventListeners() {
    super._setEventListeners();
    this._element.querySelector('.popup__link').addEventListener('click', () => {
      this._popupSignIn.open(this);
      this._close();
    });
    this._element.querySelector('.popup__form').addEventListener('submit', this._heandlerSubmit);
  }

  _heandlerSubmit(event) {
    const form = this._element.querySelector('.popup__form');
    event.preventDefault();
    this._popupSuccess.open(this);
    this._apiFindNews
      .signUp(form.elements.email.value, form.elements.password.value, form.elements.name.value)
      .then(() => this._contentSuccess.open(this.contentSignIn, this._header, this._api))
      .catch((err) => console.log(err));
    this._close();
  }
}
