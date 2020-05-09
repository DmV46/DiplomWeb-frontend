import Popup from './Popup';
import iconClose from '../../images/close.svg';

const popupSuccess = `<img src="${iconClose}" alt="close" class="popup__close">
  <h1 class="roboto roboto_size_extra-extra-large roboto_weight_black popup__title popup__title_position">Пользователь успешно зарегистрирован</h1>
  <p class="inter inter_size_large popup__text popup__text_position"><span class="popup__link">Выполнить вход</span></p>`;

export default class PopupSuccess extends Popup {
  constructor(selector, container, popupSignIn, header) {
    super(selector, container);
    this._header = header;
    this._popupSignIn = popupSignIn;
  }

  open(popupSignUp) {
    super.open();
    this._setEventListeners(popupSignUp);
    if (document.body.clientWidth <= 414) {
      this._header.hideMobileMenu();
    }
  }

  _setContent() {
    this._element.querySelector('.popup__content').insertAdjacentHTML('beforeend', popupSuccess);
    super._setContent();
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
      this._popupSignIn.open(popupSignUp);
      this._close();
    });
  }
}
