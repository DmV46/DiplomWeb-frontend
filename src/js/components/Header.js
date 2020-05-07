export default class Header {
  constructor(color, {
    checkAuthorizationCallback, logoutCallback, openSignUpCallback, getUserCallback,
  }) {
    this._color = color;
    this._header = document.querySelector('.header');
    this._button = this._header.querySelector('.header__button');
    this._linksContainer = this._header.querySelector('.header__links-container');
    this._boxMenu = this._header.querySelector('.header__mobile-menu');
    this._labelMenu = this._header.querySelector('.header__label');
    this._links = null;

    this._checkAuthorizationCallback = checkAuthorizationCallback || (() => {});
    this._logoutCallback = logoutCallback || (() => {});
    this._openSignUpCallback = openSignUpCallback || (() => {});
    this._getUserCallback = getUserCallback || (() => {});

    this._logoutCallback = this._logoutCallback.bind(this);
    this._openSignUpCallback = this._openSignUpCallback.bind(this);
    this._renderButtonSignOut = this._renderButtonSignOut.bind(this);
  }

  render(props) {
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

    // if (document.body.clientWidth <= 414) {
    //   this.onblur = this.hideMobileMenu();
    // }
  }

  _setColorTheme() {
    this._header.style.color = `${this._color}`;
  }

  _renderButtonSignOut(userName) {
    this._button.classList.add('header__button_sign-out');
    this._button.innerHTML = `<span class='header__user'>${userName}</span>
    <svg class="header__icon" width="18" height="16" viewBox="0 0 18 16" fill="${this._color}" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M6 2L2 2L2 14H6V16H2C0.89543 16 0 15.1046 0 14V2C0 0.89543 0.895432 0 2 0H6V2ZM13.5856 9.00002L9.29274 13.1339L10.707 14.4958L17.4141 8.03706L10.707 1.57837L9.29274 2.9402L13.5856 7.0741H4V9.00002H13.5856Z"/></svg>`;
  }

  _renderButtonSignUp() {
    this._button.classList.add('header__button_auth');
    this._button.textContent = 'Авторизоваться';
  }

  _addNewLinks() {
    this._linksContainer.insertAdjacentHTML('beforeend', '<a href="./saved_articles" class="header__link ">Сохранённые статьи</a>');
  }

  _setSelectedLink() {
    this._links = document.querySelectorAll('.header__link');
    if (window.location.pathname === '/saved_articles') {
      this._links[1].classList.add('header__link_selected');
    } else {
      this._links[0].classList.add('header__link_selected');
    }
  }

  showMobileMenu() {
    this._labelMenu.style.display = 'block';
  }

  hideMobileMenu() {
    this._boxMenu.checked = false;
    this._labelMenu.style.display = 'none';
  }

  _setEventListeners(fn) {
    this._button.addEventListener('click', fn);
  }

  _removeEventListeners(fn) {
    this._button.removeEventListener('click', fn);
  }
}
