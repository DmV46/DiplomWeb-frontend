/* eslint-disable no-param-reassign */

import './index.css';
import Header from './js/components/Header';
import PopupSignUp, {} from './js/components/PopupSignUp';
import PopupSignIn from './js/components/PopupSignIn';
import PopupSuccess from './js/components/PopupSuccess';
import NewsFounded from './js/components/NewsFounded';
import Form from './js/components/Form';
import { getFormatDate, toUpperFirstSimbol } from './js/utils/utils';
import {
  props, mainApi, apiNews, newsList, BODY, FORM_SEARCH,
  PRELOADER, RESULT_BLOCK, RESULT_NOT_FOUND,
  RESULT_FOUND, RESULT_BUTTON,
} from './js/constants/constants';


const popupSignIn = new PopupSignIn('#popup-template', BODY, header, mainApi);
const popupSuccess = new PopupSuccess('#popup-template', BODY, popupSignIn, header);
const popupSignUp = new PopupSignUp('#popup-template', BODY, popupSignIn, popupSuccess, header, mainApi);

const callbacksHeader = {
  checkAuthorizationCallback: (propsUser) => {
    if (localStorage.getItem('token')) {
      propsUser.isLoggedIn = true;
    }
  },
  logoutCallback: () => {
    localStorage.removeItem('token');
    window.location.reload();
  },
  openSignUpCallback: () => {
    popupSignUp.open((selector) => new Form(selector));
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
};

const header = new Header('#fff', callbacksHeader);
header.render(props);

FORM_SEARCH.addEventListener('submit', (event) => {
  event.preventDefault();
  const keyword = FORM_SEARCH.elements.keyword.value;
  if (RESULT_BLOCK.classList.contains('result_unvisible')) {
    RESULT_BLOCK.classList.remove('result_unvisible');
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
      newsList.add = masNews.articles;
      newsList.clearContainer();
      newsList.clearCounter();
      for (let i = 0; i < 3; i++) {
        newsList.renderNews(newsList.list[i], (data) => {
          const news = new NewsFounded('#news-template', data, getFormatDate, mainApi);
          news.keyword = toUpperFirstSimbol(keyword);
          return news.node;
        });
      }
      RESULT_BUTTON.addEventListener('click', () => {
        const countRender = newsList.counter + 3;
        for (let i = newsList.counter; i < countRender; i++) {
          newsList.renderNews(newsList.list[i], (data) => {
            const news = new NewsFounded('#news-template', data, getFormatDate, mainApi);
            news.keyword = toUpperFirstSimbol(keyword);
            return news.node;
          });
          // FIXME: хреново работает
          if (countRender === newsList.length) {
            RESULT_BUTTON.classList.add('result__button-more_unvisible');
            return;
          }
        }
      });
    })
    .catch((err) => alert(err))
    .finally(() => PRELOADER.classList.add('result_unvisible'));
});
