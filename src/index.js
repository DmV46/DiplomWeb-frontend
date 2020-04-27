import './index.css';
import Header from './js/components/Header';
import PopupSignUp, {} from './js/components/PopupSignUp';
import PopupSignIn from './js/components/PopupSignIn';
import PopupSuccess from './js/components/PopupSuccess';
import {
  props, apiFindNews, apiNews, HEADER_BUTTON, BODY, FORM_SEARCH,
} from './js/constants/constants';

const header = new Header('#fff');
const popupSignIn = new PopupSignIn('#popup-template', BODY, header, apiFindNews);
const popupSuccess = new PopupSuccess('#popup-template', BODY, popupSignIn, header);
const popupSignUp = new PopupSignUp('#popup-template', BODY, popupSignIn, popupSuccess, header, apiFindNews);

if (localStorage.getItem('token')) {
  props.isLoggedIn = true;
  apiFindNews.headers.authorization = `${localStorage.getItem('token')}`;
  apiFindNews.getMe()
    .then((result) => console.log(result))
    .catch((err) => console.log(err));
}

header.render(props);
document.querySelectorAll('.header__link')[0].classList.add('header__link_selected');


if (HEADER_BUTTON.classList.contains('header__button_auth')) {
  HEADER_BUTTON.addEventListener('click', () => {
    popupSignUp.open();
  });
} else {
  HEADER_BUTTON.addEventListener('click', () => {
    localStorage.removeItem('token');
    window.location.reload();
  });
}

FORM_SEARCH.addEventListener('submit', (event) => {
  event.preventDefault();
  const keyword = FORM_SEARCH.elements.keyword.value;
  apiNews.getNews(keyword)
    .then((result) => {
      console.log(result);
    })
    .catch((err) => console.log(err));
});
