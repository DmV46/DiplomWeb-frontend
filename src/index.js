import './index.css';
import Header from './js/components/Header';
import PopupSignUp, {} from './js/components/PopupSignUp';
import PopupSignIn from './js/components/PopupSignIn';
import {
  props, HEADER_BUTTON, BODY,
} from './js/constants/constants';

const header = new Header('#fff');
const popupSignUp = new PopupSignUp('#popup-template', BODY);
const popupSignIn = new PopupSignIn('#popup-template', BODY);

props.isLoggedIn = false;
header.render(props);
document.querySelectorAll('.header__link')[0].classList.add('header__link_selected');


if (HEADER_BUTTON.classList.contains('header__button_auth')) {
  HEADER_BUTTON.addEventListener('click', () => {
    popupSignUp.open(popupSignIn, header);
  });
} else {
  HEADER_BUTTON.addEventListener('click', () => {
    // document.querySelectorAll('.header__link')[1].remove();
    // header.render(props);
  });
}
