import Popup from './Popup';

export default class PopupSignIn extends Popup {
  set callbacks(callbacks) {
    this._callbacks = callbacks;
    this._hendlerOpenSignUp = this._callbacks.openSignUpCallback || (() => {});
    this._hendlerSubmitSignIn = this._callbacks.submitSignInCallback || (() => {});
    this._hendlerValidateForm = this._callbacks.validateFormCallback || (() => {});
    this._showMobileMenu = this._callbacks.showMobileMenuCallback || (() => {});
    this._hideMobileMenu = this._callbacks.hideMobileMenuCallback || (() => {});
    this._clearForm = this._callbacks.clearFormCallback || (() => {});
  }

  open() {
    super._open();
    this._setEventListeners();
    this._hideMobileMenu();
  }

  close() {
    this._showMobileMenu();
    this._removeEventListeners();
    this._clearForm();
    super._close();
  }

  _close() {
    this._clearForm();
    super._close();
  }

  _setEventListeners() {
    super._setEventListeners();
    this._component.querySelector('.popup__link').addEventListener('click', this._hendlerOpenSignUp);
    this._component.querySelector('.popup__form').addEventListener('submit', this._hendlerSubmitSignIn);
    this._component.querySelector('.popup__form').addEventListener('input', this._hendlerValidateForm);
  }

  _removeEventListeners() {
    super._removeEventListeners();
    this._component.querySelector('.popup__link').removeEventListener('click', this._hendlerOpenSignUp);
    this._component.querySelector('.popup__form').removeEventListener('submit', this._hendlerSubmitSignIn);
    this._component.querySelector('.popup__input').removeEventListener('input', this._hendlerValidateForm);
  }
}
