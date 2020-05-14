import { VALIDATION_ERRORS } from '../constants/constants';

export default class Form {
  constructor(selector) {
    this._form = document.querySelector(selector);
    this.handlerValidateForm = this.handlerValidateForm.bind(this);
  }

  get elements() {
    return this._form.elements;
  }

  static validateInputElement(event) {
    const currentInput = event.target;
    if (currentInput.validity.valid) {
      currentInput.style.borderBottomColor = '#31a863';
      currentInput.nextElementSibling.textContent = '';
    }

    if (currentInput.validity.valueMissing) {
      currentInput.style.borderBottomColor = '#ff0000';
      currentInput.nextElementSibling.textContent = VALIDATION_ERRORS.EMPTY;
    }

    if (currentInput.validity.tooLong || currentInput.validity.tooShort) {
      if (currentInput.name === 'password') {
        currentInput.style.borderBottomColor = '#ff0000';
        currentInput.nextElementSibling.textContent = VALIDATION_ERRORS.PASSWORD_LENGTH;
        return;
      }
      currentInput.nextElementSibling.textContent = VALIDATION_ERRORS.LENGTH;
    }

    if (currentInput.validity.typeMismatch) {
      currentInput.style.borderBottomColor = '#ff0000';
      currentInput.nextElementSibling.textContent = VALIDATION_ERRORS.NOT_EMAIL;
    }
  }

  _checkValidityForm() {
    if (this._form.checkValidity()) {
      this._form.querySelector('.popup__button').removeAttribute('disabled');
      this._form.querySelector('.popup__button').classList.add('popup__button_active');
    } else {
      this._form.querySelector('.popup__button').setAttribute('disabled', true);
      this._form.querySelector('.popup__button').classList.remove('popup__button_active');
    }
  }

  handlerValidateForm(event) {
    Form.validateInputElement(event);
    this._checkValidityForm();
  }

  setServerError(err) {
    this._form.querySelector('.popup__error_submit').textContent = err;
  }

  clear() {
    this._form.reset();
    this._form.querySelectorAll('.popup__error').forEach((item) => {
      const input = item;
      input.textContent = '';
    });
    this._form.querySelectorAll('.popup__input').forEach((item) => {
      const input = item;
      input.style.borderBottomColor = 'rgba(26, 27, 34, 0.2)';
    });

    this._checkValidityForm();
  }
}
