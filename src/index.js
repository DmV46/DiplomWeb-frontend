import './index.css';
import Header from './js/components/Header';
import PopupSignUp, {} from './js/components/PopupSignUp';
import PopupSignIn from './js/components/PopupSignIn';
import PopupSuccess from './js/components/PopupSuccess';
import News from './js/components/News';
import { getFormatDate } from './js/utils/utils';
import {
  props, mainApi, apiNews, newsList,
  HEADER_BUTTON, BODY, FORM_SEARCH,
  PRELOADER, RESULT_SEARCH, RESULT_NOT_FOUND,
  RESULT_FOUND, RESULT_BUTTON,
} from './js/constants/constants';

const header = new Header('#fff');
const popupSignIn = new PopupSignIn('#popup-template', BODY, header, mainApi);
const popupSuccess = new PopupSuccess('#popup-template', BODY, popupSignIn, header);
const popupSignUp = new PopupSignUp('#popup-template', BODY, popupSignIn, popupSuccess, header, mainApi);

if (localStorage.getItem('token')) {
  props.isLoggedIn = true;
  mainApi.getUserData()
    .then((user) => {
      props.userName = user.name;
      header.render(props);
    })
    .catch((err) => alert(err));
} else {
  header.render(props);
}

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
      console.log(masNews);
      RESULT_FOUND.classList.remove('result_unvisible');
      newsList.add = masNews.articles;
      newsList.clearContainer();
      newsList.clearCounter();
      for (let i = 0; i < 3; i++) {
        newsList.renderNews(newsList.list[i], (data) => {
          const news = new News('#news-template', data, getFormatDate, mainApi);
          news.keyword = keyword;
          return news.node;
        });
      }
      RESULT_BUTTON.addEventListener('click', () => {
        const countRender = newsList.counter + 3;
        for (let i = newsList.counter; i < countRender; i++) {
          newsList.renderNews(newsList.list[i], (data) => {
            const news = new News('#news-template', data, getFormatDate, mainApi);
            news.keyword = keyword;
            return news.node;
          });
          if (countRender === 99) {
            RESULT_BUTTON.classList.add('result__button-more_unvisible');
            return;
          }
        }
      });
    })
    .catch((err) => alert(err))
    .finally(() => PRELOADER.classList.add('result_unvisible'));
});
