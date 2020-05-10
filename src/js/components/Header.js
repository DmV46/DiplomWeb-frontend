import '../../blocks/header/header.css';
import Header from '../classes/Header';
import popupSignUp from './popupSignUp';
import mainApi from '../api/instances/mainApi';
import { props } from '../constants/constants';

const callbacksHeader = {
  checkAuthorizationCallback: (propsUser) => {
    const user = propsUser;
    if (localStorage.getItem('token')) {
      user.isLoggedIn = true;
    }
  },
  getUserCallback: (renderButton) => {
    mainApi.getUserData()
      .then((user) => {
        props.userName = user.name;
        renderButton(props.userName);
      })
      .catch(() => {
        props.userName = 'Noname';
        renderButton(props.userName);
      });
  },
  logoutCallback: () => {
    localStorage.removeItem('token');
    window.location.reload();
  },
  openSignUpCallback: () => {
    popupSignUp.open();
  },
};

const header = new Header('.main', '#fff', callbacksHeader);

header.createComponent(
  'header',
  ['header', 'header_position', 'roboto', 'roboto_size_extra-large', 'roboto_weight_medium'],
  `
<div class="header__container">
  <a class="roboto-slab roboto-slab_size_small header__logo" href="./">FindNews</a>
  <input class="header__mobile-menu" type="checkbox" id="mobile-input">
  <label class="header__label" for="mobile-input">
      <span class="header__bar header__bar_top header__bar_bg-color_white"></span>
      <span class="header__bar header__bar_bottom header__bar_bg-color_white"></span>
  </label>
  <nav class="header__navigation header__navigation_bg-color_black">
    <div class="header__links-container">
      <a href="./" class="header__link header__link_selected">Главная</a>
    </div>
    <button class="button header__button">Авторизоваться</button>
  </nav>
</div>
<hr class="header__line">`,
);

export default header;
