import iconClose from '../../images/close.svg';
import PopupSignIn from '../classes/Popup/PopupSignIn';
import Form from '../classes/Form';
import popupSignUp from './popupSignUp';
import header from './header';
import mainApi from '../api/instances/mainApi';

const popupSignIn = new PopupSignIn('.main');

popupSignIn.createComponent(
  'div',
  ['popup', 'popup_mobile'],
  `<div class="popup__content">
  <img src="${iconClose}" alt="close" class="popup__close">
  <h1 class="roboto roboto_size_extra-extra-large roboto_weight_black popup__title">Вход</h1>
  <form class="popup__form">
    <label class="inter inter_size_small popup__label" for="email">Email</label>
    <input class="inter inter_size_medium popup__input" type="email" name="email" id="email" placeholder="Введите почту" required pattern="^[a-z0-9_-]{2,}(\.[a-z0-9_-]+)*@[a-z0-9_-]{2,}(\.[a-z0-9_-]{2,})*\.[a-z]{2,6}$">
    <span class="inter inter_size_small popup__error"></span>
    <label class="inter inter_size_small popup__label" for="password">Пароль</label>
    <input class="inter inter_size_medium popup__input" type="password" name="password" id="password" placeholder="Введите пароль" required minlength="8">
    <span class="inter inter_size_small popup__error"></span>
    <span class="inter inter_size_small popup__error popup__error_submit"></span>
    <button class="button popup__button popup__button_sign-in" type="submit" >Войти</button>
    <p class="inter inter_size_medium popup__text">или <span class="popup__link">Зарегистрироваться</span></p>
  </form>
  </div>`,
);

const callbacksPopupSignIn = {
  openSignUpCallback: () => {
    popupSignIn.close();
    popupSignUp.open();
  },
  submitSignInCallback: (event) => {
    event.preventDefault();
    const form = new Form('.popup__form');
    mainApi
      .signIn(form.elements.email.value, form.elements.password.value)
      .then((result) => {
        localStorage.setItem('token', result.token);
        form.clear();
        popupSignIn.close();
        window.location.reload();
      })
      .catch((error) => {
        error
          .then((message) => {
            form.setServerError(message.message);
          });
      });
  },
  validateFormCallback: (event) => {
    const form = new Form('.popup__form');
    form.handlerValidateForm(event);
  },
  showMobileMenuCallback: () => {
    header.showMobileMenu();
  },

  hideMobileMenuCallback: () => {
    header.hideMobileMenu();
  },
  clearFormCallback: () => {
    const form = new Form('.popup__form');
    form.clear();
  },
};

popupSignIn.callbacks = callbacksPopupSignIn;

export default popupSignIn;
