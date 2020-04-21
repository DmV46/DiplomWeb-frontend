import './index.css';
import Header from './js/components/Header';
import {
  props, BTN_AUTH, BTN_SIGN_OUT, BODY, CHECKBOX_MENU, LABEL_MENU,
} from './js/constants/constants';
import PopupSignUp, {} from './js/components/PopupSignUp';
import PopupSignIn from './js/components/PopupSignIn';


const header = new Header('header_color_white');
const popupSignUp = new PopupSignUp('#popup-template', BODY);
const popupSignIn = new PopupSignIn('#popup-template', BODY);

header.render(props);

if (!BTN_AUTH.classList.contains('header__button_unvisible')) {
  BTN_AUTH.addEventListener('click', () => {
    popupSignUp.open(popupSignIn, LABEL_MENU);
    if (BODY.clientWidth <= 320) {
      CHECKBOX_MENU.checked = false;
      LABEL_MENU.style.display = 'none';
    }
  });
} else {
  BTN_SIGN_OUT.addEventListener('click', () => {
    console.log('you logout');
  });
}
