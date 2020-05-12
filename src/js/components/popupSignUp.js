import iconClose from '../../images/close.svg';
import PopupSignUp from '../classes/Popup/PopupSignUp';
import Form from '../classes/Form';
import apiNews from '../api/instances/apiNews';
import popupSignIn from './popupSignIn';
import popupSuccess from './popupSuccess';
import header from './header';

const popupSignUp = new PopupSignUp('.main');

popupSignUp.createComponent(
  'div',
  ['popup', 'popup_mobile'],
  `
  <div class="popup__content">
  <img src="${iconClose}" alt="close" class="popup__close">
    <h1 class="roboto roboto_size_extra-extra-large roboto_weight_black popup__title">Регистрация</h1>
    <form class="popup__form">
      <label class="inter inter_size_small popup__label" for="email">Email</label>
      <input class="inter inter_size_medium popup__input" type="email" name="email" id="email" placeholder="Введите почту" required pattern="^[a-z0-9_-]{2,}(\.[a-z0-9_-]+)*@[a-z0-9_-]{2,}(\.[a-z0-9_-]{2,})*\.[a-z]{2,6}$">
      <span class="inter inter_size_small popup__error"></span>
      <label class="inter inter_size_small popup__label" for="password">Пароль</label>
      <input class="inter inter_size_medium popup__input" type="password" name="password" id="password" placeholder="Введите пароль" required minlength="8">
      <span class="inter inter_size_small popup__error"></span>
      <label class="inter inter_size_small popup__label" for="name">Имя</label>
      <input class="inter inter_size_medium popup__input" type="text" name="name" id="name" placeholder="Введите своё имя" required pattern="^([А-ЯЁA-Z]|[а-яёa-z])+(\-[А-ЯЁA-z]{1}[а-яёa-z]+)?$" minlength="2" maxlength="30">
      <span class="inter inter_size_small popup__error"></span>
      <span class="inter inter_size_small popup__error popup__error_submit"></span>
      <button class="button popup__button popup__button_sign-up" type="submit">Зарегистрироваться</button>
      <p class="inter inter_size_medium popup__text">или <span class="popup__link">Войти</span></p>
    </form>
  </div>
  `,
);

const callbacksPopupSignUp = {
  openSignInCallback: () => {
    popupSignUp.close();
    popupSignIn.open();
  },
  submitSignUpCallback: (event) => {
    const form = document.querySelector('.popup__form');
    event.preventDefault();
    popupSuccess.open();
    apiNews
      .signUp(form.elements.email.value, form.elements.password.value, form.elements.name.value)
      .then(() => popupSuccess.open())
      .catch((err) => alert(err));
    popupSignUp.close();
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
};

popupSignUp.callbacks = callbacksPopupSignUp;


export default popupSignUp;
