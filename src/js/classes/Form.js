import { VALIDATION_ERRORS } from '../constants/constants';

export default class Form {
  constructor(selector) {
    this._form = document.querySelector(selector);
    this.handlerValidateForm = this.handlerValidateForm.bind(this);
  }


  _validateInputElement(element) {
    const currentInput = element;
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

  _checkValidForm() {
    let isValid = 1;
    this._form.querySelectorAll('.popup__input').forEach((input) => {
      isValid *= input.validity.valid;
    });

    return isValid;
  }

  _renderButton(isValid) {
    if (isValid) {
      this._form.querySelector('.popup__button').removeAttribute('disabled');
      this._form.querySelector('.popup__button').classList.add('popup__button_active');
    } else {
      this._form.querySelector('.popup__button').setAttribute('disabled', true);
      this._form.querySelector('.popup__button').classList.remove('popup__button_active');
    }
  }

  handlerValidateForm(event) {
    this._validateInputElement(event.target);
    this._renderButton(this._checkValidForm());
  }

  setServerError(err) {
    this._form.querySelector('popup__error_submit').textContent = err;
  }
}
