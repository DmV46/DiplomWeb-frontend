import {
  HEADER,
  HEADER_BUTTON,
  HEADER_LINKS_CONTAINER,
  CHECKBOX_MENU,
  LABEL_MENU,
} from '../constants/constants';


export default class Header {
  constructor(color) {
    this._color = color;
    this._boxMenu = CHECKBOX_MENU;
    this._labelMenu = LABEL_MENU;
  }

  render(props) {
    document.querySelectorAll('.header__link')[0].classList.add('header__link_selected');
    HEADER.style.color = `${this._color}`;
    if (props.isLoggedIn) {
      HEADER_BUTTON.classList.add('header__button_sign-out');
      HEADER_BUTTON.innerHTML = `<span class='header__user'>${props.userName}</span>
      <svg class="header__icon" width="18" height="16" viewBox="0 0 18 16" fill="${this._color}" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M6 2L2 2L2 14H6V16H2C0.89543 16 0 15.1046 0 14V2C0 0.89543 0.895432 0 2 0H6V2ZM13.5856 9.00002L9.29274 13.1339L10.707 14.4958L17.4141 8.03706L10.707 1.57837L9.29274 2.9402L13.5856 7.0741H4V9.00002H13.5856Z"/></svg>`;
      HEADER_LINKS_CONTAINER.insertAdjacentHTML('beforeend', '<a href="./saved_articles" class="header__link ">Сохранённые статьи</a>');
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
