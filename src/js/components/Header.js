import {
  HEADER, BTN_AUTH, BTN_SIGN_OUT, NAV_LINKS, CHECKBOX_MENU, LABEL_MENU,
} from '../constants/constants';

export default class Header {
  constructor(color) {
    this._color = color;
    this._boxMenu = CHECKBOX_MENU;
    this._labelMenu = LABEL_MENU;
  }

  render(props) {
    HEADER.classList.add(this._color);
    if (props.isLoggedIn) {
      BTN_AUTH.classList.add('header__button_unvisible');
      BTN_SIGN_OUT.classList.remove('header__button_unvisible');
      NAV_LINKS[1].classList.remove('header__link_unvisible');
    } else {
      BTN_SIGN_OUT.classList.add('header__button_unvisible');
      NAV_LINKS[1].classList.add('header__link_unvisible');
    }
  }

  showMobileMenu() {
    this._labelMenu.style.display = 'block';
  }

  hideMobileMenu() {
    this._boxMenu.checked = false;
    this._labelMenu.style.display = 'none';
  }
}
