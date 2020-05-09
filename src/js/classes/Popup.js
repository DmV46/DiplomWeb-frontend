import { ESCAPE_CODE } from '../constants/constants';

export default class Popup {
  constructor(selector, container) {
    this._container = container;
    this._template = document.querySelector(selector).content.querySelector('.popup');
    this._element = this._template.cloneNode(true);
    this._handleEscClose = this._handleEscClose.bind(this);
    this._close = this._close.bind(this);
    this.open = this.open.bind(this);
  }

  open() {
    this._setContent();
    this._element.classList.add('popup_is-opened');
    document.body.style.overflow = 'hidden';
  }

  _setContent() {
    this._container.appendChild(this._element);
  }

  _close() {
    this._element.classList.remove('popup_is-opened');
    this._removeEventListeners();
    this._element.remove();
    document.body.style.overflow = '';
  }

  _setEventListeners() {
    document.addEventListener('keyup', this._handleEscClose);
    this._element.querySelector('.popup__close').addEventListener('click', this._close);
  }

  _removeEventListeners() {
    document.removeEventListener('keyup', this._handleEscClose);
    this._element.querySelector('.popup__close').removeEventListener('click', this._close);
  }

  _handleEscClose(event) {
    if (event.keyCode === ESCAPE_CODE) {
      this._close();
    }
  }
}
