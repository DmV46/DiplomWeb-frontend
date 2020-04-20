import Popup from './Popup';

const popupContent = `
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
      <button class="button popup__button" type="submit" disabled>Зарегистрироваться</button>
      <p class="inter inter_size_medium popup__text">или <a href="#" class="popup__link">Войти</a></p>
    </form>
`;

const popupSignUp = popupContent;

export default class PopupSugnUp extends Popup {
  setContent() {
    if (this._element.querySelector('.popup__content').childNodes.length === 3) {
      this._element.querySelector('.popup__content').insertAdjacentHTML('beforeend', popupSignUp);
    }
    super.setContent();
  }

  _clearContent() {
    this._element.querySelector('.popup__form').reset();
  }

  _close() {
    this._clearContent();
    super._close();
  }
}
