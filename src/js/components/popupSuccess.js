import iconClose from '../../images/close.svg';
import PopupSuccess from '../classes/Popup/PopupSuccess';
import popupSignIn from './popupSignIn';
import header from './header';

const popupSuccess = new PopupSuccess('.main');

popupSuccess.createComponent(
  'div',
  ['popup', 'popup_mobile'],
  `
  <div class="popup__content">
  <img src="${iconClose}" alt="close" class="popup__close">
  <h1 class="roboto roboto_size_extra-extra-large roboto_weight_black popup__title popup__title_position">Пользователь успешно зарегистрирован</h1>
  <p class="inter inter_size_large popup__text popup__text_position"><span class="popup__link">Выполнить вход</span></p>
  </div>
  `,
);

const callbacksPopupSuccess = {
  openSignInCallback: () => {
    popupSignIn.open();
    popupSuccess.close();
  },
  showMobileMenuCallback: () => {
    header.showMobileMenu();
  },
  hideMobileMenuCallback: () => {
    header.hideMobileMenu();
  },
};
popupSuccess.callbacks = callbacksPopupSuccess;

export default popupSuccess;
