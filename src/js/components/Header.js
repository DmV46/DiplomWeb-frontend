import iconLogoutDark from '../../images/icon-logout_dark.svg';
import iconLogoutWhite from '../../images/icon-logout_white.svg';
import {
  HEADER,
  HEADER_BUTTON,
  HEADER_LINKS_CONTAINER,
  CHECKBOX_MENU,
  LABEL_MENU,
} from '../constants/constants';


export default class Header {
  constructor(color, props) {
    this._color = color;
    this.propsUser = props;
    this._boxMenu = CHECKBOX_MENU;
    this._labelMenu = LABEL_MENU;
  }

  render() {
    HEADER.classList.add(this._color);
    if (this.propsUser.isLoggedIn) {
      HEADER_BUTTON.classList.add('header__button_sign-out');
      HEADER_BUTTON.innerHTML = `<span class='header__user'>${this.propsUser.userName}</span><img class="header__icon" src="${iconLogoutWhite}" alt="logout_dark">`;
      HEADER_LINKS_CONTAINER.insertAdjacentHTML('beforeend', '<a href="../saved_articles" class="header__link ">Сохранённые статьи</a>');
      if (document.location.pathname === '/') {
        document.querySelectorAll('.header__link')[0].classList.add('header__link_selected');
      } else {
        document.querySelectorAll('.header__link')[1].classList.add('header__link_selected');
        HEADER_BUTTON.querySelector('.header__icon').src = iconLogoutDark;
      }
    } else {
      HEADER_BUTTON.classList.add('header__button_auth');
      HEADER_BUTTON.innerHTML = 'Авторизоваться';
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
