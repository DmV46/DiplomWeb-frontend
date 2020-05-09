/* eslint-disable no-param-reassign */
import './index.css';
import Header from './js/classes/Header';
import Search from './js/classes/Search';
import Result from './js/classes/Result/Result';
import ResultPreloader from './js/classes/Result/ResultPreloader';
import About from './js/classes/About';
import Footer from './js/classes/Footer';

import PopupSignUp, {} from './js/classes/PopupSignUp';
import PopupSignIn from './js/classes/PopupSignIn';
import PopupSuccess from './js/classes/PopupSuccess';
import NewsFounded from './js/classes/NewsFounded';
import Form from './js/classes/Form';
import apiNews from './js/instances/apiNews';
import mainApi from './js/instances/mainApi';
import { getFormatDate, toUpperFirstSimbol } from './js/utils/utils';
import { props, BODY, RESULT_BUTTON } from './js/constants/constants';
import ResultNotFound from './js/classes/Result/ResultNotFound';
import ResultFound from './js/classes/Result/ResultFound';

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
const header = new Header('.main', '#fff', callbacksHeader);
header.render(props);

const callbacksSearch = {
  submitCallBack: (keyword) => {
    result.removeChildAll('.result');
    result.show('result_unvisible');
    preloader.render();

    apiNews.getNews(keyword)
      .then((arrayNews) => {
        if (arrayNews.totalResults === 0) {
          resultNotFound.render();
          return;
        }
        resultFound.render();
        resultFound.addNews = arrayNews.articles;
        for (let i = 0; i < 3; i++) {
          resultFound.renderNews(resultFound.list[i], (data) => {
            const news = new NewsFounded('#news-template', data, getFormatDate, mainApi);
            news.keyword = toUpperFirstSimbol(keyword);
            return news.node;
          });
        }
      })
      .catch((err) => { throw new Error(err); })
      .finally(() => { preloader.hide('result_unvisible'); });
  },
};
const search = new Search('.main', callbacksSearch);
search.render();

const result = new Result('.main');
result.render();

const about = new About('.main');
about.render();

const footer = new Footer('.main');
footer.render();

const preloader = new ResultPreloader('.result');
const resultNotFound = new ResultNotFound('.result');

const callBackResultFound = {
  moreNewsCallBack: () => {
    const { keyword } = search;
    const countRender = resultFound.countNews + 3;
    for (let i = resultFound.countNews; i < countRender; i++) {
      resultFound.renderNews(resultFound.list[i], (data) => {
        const news = new NewsFounded('#news-template', data, getFormatDate, mainApi);
        news.keyword = toUpperFirstSimbol(keyword);
        return news.node;
      });
      if (countRender === resultFound.length) {
        RESULT_BUTTON.classList.add('result__button-more_unvisible');
        return;
      }
    }
  },
};
const resultFound = new ResultFound('.result', callBackResultFound);
