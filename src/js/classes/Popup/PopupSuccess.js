import Popup from './Popup';

export default class PopupSuccess extends Popup {
  set callbacks(callbacks) {
    this._callbacks = callbacks;
    this._hendlerOpenSignIn = this._callbacks.openSignInCallback || (() => {});
    this._showMobileMenu = this._callbacks.showMobileMenuCallback || (() => {});
    this._hideMobileMenu = this._callbacks.hideMobileMenuCallback || (() => {});
  }

  open() {
    super._open();
    this._setEventListeners();
    this._hideMobileMenu();
  }

  close() {
    this._showMobileMenu();
    this._removeEventListeners();
    super._close();
  }

  _setEventListeners() {
    super._setEventListeners();
    this._component.querySelector('.popup__link').addEventListener('click', this._hendlerOpenSignIn);
  }

  _removeEventListeners() {
    super._removeEventListeners();
    this._component.querySelector('.popup__link').removeEventListener('click', this._hendlerOpenSignIn);
  }
}
