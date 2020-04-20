// '#popup-template', document.querySelector('.main')
import { ESCAPE_CODE } from '../constants/constants';

export default class Popup {
  constructor(selector, container) {
    this._container = container;
    this._template = document.querySelector(selector).content.querySelector('.popup');
    this._element = this._template.cloneNode(true);
    this._setEventListeners();
    this._handleEscClose = this._handleEscClose.bind(this);
  }

  setContent() {
    this._element.classList.add('popup_is-opened');
    this._container.appendChild(this._element);
    document.addEventListener('keyup', this._handleEscClose);
    document.body.style.overflow = 'hidden';
  }

  _close() {
    this._element.classList.remove('popup_is-opened');
    document.removeEventListener('keyup', this._handleEscClose);
    this._element.remove();
    // this._element = null;
    document.body.style.overflow = '';
  }

  _setEventListeners() {
    this._element.querySelector('.popup__close').addEventListener('click', () => {
      this._close();
    });
  }

  _handleEscClose(event) {
    if (event.keyCode === ESCAPE_CODE) {
      this.close();
    }
  }
}
