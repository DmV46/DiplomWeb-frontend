import Popup from './Popup';

const popupContent = `<form class="popup__form">
    <label class="inter inter_size_small popup__label" for="email">Email</label>
    <input class="inter inter_size_medium popup__input" type="email" name="email" id="email" placeholder="Введите почту" required pattern="^[a-z0-9_-]{2,}(\.[a-z0-9_-]+)*@[a-z0-9_-]{2,}(\.[a-z0-9_-]{2,})*\.[a-z]{2,6}$">
    <span class="inter inter_size_small popup__error"></span>
    <label class="inter inter_size_small popup__label" for="password">Пароль</label>
    <input class="inter inter_size_medium popup__input" type="password" name="password" id="password" placeholder="Введите пароль" required>
    <span class="inter inter_size_small popup__error"></span>
    <span class="inter inter_size_small popup__error popup__error_submit"></span>
    <button class="button popup__button popup__button_sign-in" type="submit" disabled>Войти</button>
    <p class="inter inter_size_medium popup__text">или <span class="popup__link">Зарегистрироваться</span></p>
  </form>`;

const popupSignIn = popupContent;

export default class PopupSignIn extends Popup {
  open(contentSignUp) {
    this._element.querySelector('.popup__title').textContent = 'Вход';
    this._element.querySelector('.popup__content').insertAdjacentHTML('beforeend', popupSignIn);
    this._element.querySelector('.popup__link').addEventListener('click', () => super._heandlerChange(contentSignUp));
    super.open();
  }
}
