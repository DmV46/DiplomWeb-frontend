import { ESCAPE_CODE } from '../constants/constants';
import BaseComponent from './BaseComponent';

export default class Popup extends BaseComponent {
  constructor(container) {
    super(container);
    this._handleEscClose = this._handleEscClose.bind(this);
    this._close = this._close.bind(this);
    this.open = this.open.bind(this);
  }

  _open() {
    super._render(this._component);
    this._component.classList.add('popup_is-opened');
    document.body.style.overflow = 'hidden';
  }

  _close() {
    this._component.classList.remove('popup_is-opened');
    this._component.remove();
    document.body.style.overflow = '';
  }

  _setEventListeners() {
    document.addEventListener('keyup', this._handleEscClose);
    this._component.querySelector('.popup__close').addEventListener('click', this._close);
  }

  _removeEventListeners() {
    document.removeEventListener('keyup', this._handleEscClose);
    this._component.querySelector('.popup__close').removeEventListener('click', this._close);
  }

  _handleEscClose(event) {
    if (event.keyCode === ESCAPE_CODE) {
      this._close();
    }
  }
}
