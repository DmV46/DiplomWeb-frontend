import Popup from './Popup';

export default class PopupSignUp extends Popup {
  set callbacks(callbacks) {
    this._callbacks = callbacks;
    this._hendlerOpenSignIn = this._callbacks.openSignInCallback || (() => {});
    this._hendlerSubmitSignUp = this._callbacks.submitSignUpCallback || (() => {});
    this._hendlerValidateForm = this._callbacks.validateFormCallback || (() => {});
    this._showMobileMenu = this._callbacks.showMobileMenuCallback || (() => {});
    this._hideMobileMenu = this._callbackshideMobileMenuCallback || (() => {});
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
    this._component.querySelector('.popup__form').addEventListener('submit', this._hendlerSubmitSignUp);
    this._component.querySelector('.popup__form').addEventListener('input', this._hendlerValidateForm);
  }

  _removeEventListeners() {
    super._removeEventListeners();
    this._component.querySelector('.popup__link').removeEventListener('click', this._hendlerOpenSignIn);
    this._component.querySelector('.popup__form').removeEventListener('submit', this._hendlerSubmitSignUp);
    this._component.querySelector('.popup__form').removeEventListener('input', this._hendlerValidateForm);
  }
}
