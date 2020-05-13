import BaseComponent from './BaseComponent';

export default class Header extends BaseComponent {
  constructor(container, {
    checkAuthorizationCallback, getUserCallback, logoutCallback, openSignUpCallback,
  }) {
    super(container);


    this._checkAuthorizationCallback = checkAuthorizationCallback || (() => {});
    this._logoutCallback = logoutCallback || (() => {});
    this._openSignUpCallback = openSignUpCallback || (() => {});
    this._getUserCallback = getUserCallback || (() => {});

    this._logoutCallback = this._logoutCallback.bind(this);
    this._openSignUpCallback = this._openSignUpCallback.bind(this);
    this._renderButtonSignOut = this._renderButtonSignOut.bind(this);
  }

  render(props, color) {
    this._color = color;
    super._render(this._component);
    this._checkAuthorizationCallback(props);
    this._setColorTheme();
    if (props.isLoggedIn) {
      this._getUserCallback(this._renderButtonSignOut);
      this._renderButtonSignOut();
      this._addNewLinks();
      this._setSelectedLink();
      this._setEventListeners(this._logoutCallback);
    } else {
      this._renderButtonSignUp();
      this._setEventListeners(this._openSignUpCallback);
    }

    if (document.body.clientWidth <= 414) {
      this.onblur = this.hideMobileMenu();
    }
  }

  _setColorTheme() {
    this._component.style.color = `${this._color}`;
  }

  _renderButtonSignOut(userName) {
    this._component.querySelector('.header__button').classList.add('header__button_sign-out');
    this._component.querySelector('.header__button').innerHTML = `<span class='header__user'>${userName}</span>
    <svg class="header__icon" width="18" height="16" viewBox="0 0 18 16" fill="${this._color}" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M6 2L2 2L2 14H6V16H2C0.89543 16 0 15.1046 0 14V2C0 0.89543 0.895432 0 2 0H6V2ZM13.5856 9.00002L9.29274 13.1339L10.707 14.4958L17.4141 8.03706L10.707 1.57837L9.29274 2.9402L13.5856 7.0741H4V9.00002H13.5856Z"/></svg>`;
  }

  _renderButtonSignUp() {
    this._component.querySelector('.header__button').classList.add('header__button_auth');
    this._component.querySelector('.header__button').textContent = 'Авторизоваться';
  }

  _addNewLinks() {
    this._component.querySelector('.header__links-container').insertAdjacentHTML('beforeend', '<a href = "./saved_articles" class="header__link ">Сохранённые статьи</a>');
  }

  _setSelectedLink() {
    this._links = document.querySelectorAll('.header__link');
    if (window.location.pathname === '/DiplomWeb-frontend/saved_articles/') {
      this._links[0].classList.remove('header__link_selected');
      this._links[1].classList.add('header__link_selected');
    }
  }

  showMobileMenu() {
    if (document.body.clientWidth <= 414) {
      this._labelMenu.style.display = 'block';
    }
  }

  hideMobileMenu() {
    if (document.body.clientWidth <= 414) {
      this._boxMenu.checked = false;
      this._labelMenu.style.display = 'none';
    }
  }

  _setEventListeners(fn) {
    this._component.querySelector('.header__button').addEventListener('click', fn);
  }

  _removeEventListeners(fn) {
    this._component.querySelector('.header__button').removeEventListener('click', fn);
  }
}
