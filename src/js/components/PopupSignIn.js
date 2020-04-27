import Popup from './Popup';
import iconClose from '../../images/close.svg';

const formSignIn = `<img src="${iconClose}" alt="close" class="popup__close">
  <h1 class="roboto roboto_size_extra-extra-large roboto_weight_black popup__title">Вход</h1>
  <form class="popup__form">
    <label class="inter inter_size_small popup__label" for="email">Email</label>
    <input class="inter inter_size_medium popup__input" type="email" name="email" id="email" placeholder="Введите почту" required pattern="^[a-z0-9_-]{2,}(\.[a-z0-9_-]+)*@[a-z0-9_-]{2,}(\.[a-z0-9_-]{2,})*\.[a-z]{2,6}$">
    <span class="inter inter_size_small popup__error"></span>
    <label class="inter inter_size_small popup__label" for="password">Пароль</label>
    <input class="inter inter_size_medium popup__input" type="password" name="password" id="password" placeholder="Введите пароль" required>
    <span class="inter inter_size_small popup__error"></span>
    <span class="inter inter_size_small popup__error popup__error_submit"></span>
    <button class="button popup__button popup__button_sign-in" type="submit" >Войти</button>
    <p class="inter inter_size_medium popup__text">или <span class="popup__link">Зарегистрироваться</span></p>
  </form>`;


export default class PopupSignIn extends Popup {
  constructor(selector, container, header, apiFindNews) {
    super(selector, container);
    this._header = header;
    this._apiFindNews = apiFindNews;
    this._heandlerSubmit = this._heandlerSubmit.bind(this);
  }

  open(popupSignUp) {
    super.open();
    this._setEventListeners(popupSignUp);
    if (document.body.clientWidth <= 414) {
      this._header.hideMobileMenu();
    }
  }

  _setContent() {
    super._setContent();
    this._element.querySelector('.popup__content').innerHTML = formSignIn;
  }

  _close() {
    if (document.body.clientWidth <= 414) {
      this._header.showMobileMenu();
    }
    super._close();
  }

  _setEventListeners(popupSignUp) {
    super._setEventListeners();
    this._element.querySelector('.popup__link').addEventListener('click', () => {
      popupSignUp.open();
      this._close();
    });
    this._element.querySelector('.popup__form').addEventListener('submit', this._heandlerSubmit);
  }

  _heandlerSubmit(event) {
    const form = this._element.querySelector('.popup__form');
    this._apiFindNews
      .signIn(form.elements.email.value, form.elements.password.value)
      .then((result) => {
        localStorage.setItem('token', result.token);
        window.location.reload();
      })
      .catch(() => {

      });
    this._close();
  }
}
