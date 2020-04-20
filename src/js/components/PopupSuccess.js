import Popup from './Popup';

const popupContent = '<p class="inter inter_size_large popup__text popup__text_position"><span class="popup__link">Выполнить вход</span></p>';

const popupSuccess = popupContent;

export default class PopupSignIn extends Popup {
  _setContent() {
    this._element.querySelector('.popup__title').classList.add('popup__title_position');
    this._element.querySelector('.popup__title').textContent = 'Пользователь успешно зарегистрирован';
    this._element.querySelector('.popup__content').insertAdjacentHTML('beforeend', popupSuccess);
    super._setContent();
  }
}
