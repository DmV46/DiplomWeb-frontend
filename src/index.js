import './index.css';
import Header from './js/components/Header';
import PopupSignUp, {} from './js/components/PopupSignUp';
import PopupSignIn from './js/components/PopupSignIn';
import PopupSuccess from './js/components/PopupSuccess';
import NewsList from './js/components/NewsList';
import News from './js/components/News';
import getFormatDate from './js/utils/utils';
import {
  props, apiFindNews, apiNews,
  HEADER_BUTTON, BODY, FORM_SEARCH,
  PRELOADER, RESULT_SEARCH, RESULT_NOT_FOUND,
  RESULT_FOUND,
} from './js/constants/constants';


const header = new Header('#fff');
const newsList = new NewsList('.result__container');
const popupSignIn = new PopupSignIn('#popup-template', BODY, header, apiFindNews);
const popupSuccess = new PopupSuccess('#popup-template', BODY, popupSignIn, header);
const popupSignUp = new PopupSignUp('#popup-template', BODY, popupSignIn, popupSuccess, header, apiFindNews);
if (localStorage.getItem('token')) {
  props.isLoggedIn = true;
  apiFindNews.headers.authorization = `jwt=${localStorage.getItem('token')}`;
  // apiFindNews.getMe()
  //   .then((result) => console.log(result))
  //   .catch((err) => console.log(err));
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
  if (RESULT_SEARCH.classList.contains('result_unvisible')) {
    RESULT_SEARCH.classList.remove('result_unvisible');
  }
  if (!RESULT_NOT_FOUND.classList.contains('result_unvisible')) {
    RESULT_NOT_FOUND.classList.add('result_unvisible');
  }
  if (!RESULT_FOUND.classList.contains('result_unvisible')) {
    RESULT_FOUND.classList.add('result_unvisible');
  }


  PRELOADER.classList.remove('result_unvisible');
  apiNews.getNews(keyword)
    .then((masNews) => {
      if (masNews.totalResults === 0) {
        RESULT_NOT_FOUND.classList.remove('result_unvisible');
        return;
      }
      RESULT_FOUND.classList.remove('result_unvisible');
      masNews.articles.map((item) => {
        const news = new News('#news-template', item, getFormatDate);
        console.log(news.node);
      });
    })
    .catch((err) => alert(err))
    .finally(() => PRELOADER.classList.add('result_unvisible'));
});
