/* eslint-disable no-param-reassign */
import './index.css';
import Header from './js/components/Header';
import Search from './js/components/Search';
import Result from './js/components/Result/Result';
import ResultPreloader from './js/components/Result/ResultPreloader';
import About from './js/components/About';
import Footer from './js/components/Footer';

import PopupSignUp, {} from './js/components/PopupSignUp';
import PopupSignIn from './js/components/PopupSignIn';
import PopupSuccess from './js/components/PopupSuccess';
import NewsFounded from './js/components/NewsFounded';
import Form from './js/components/Form';
import apiNews from './js/instances/apiNews';
import mainApi from './js/instances/mainApi';
import newsList from './js/instances/newsList';
import { getFormatDate, toUpperFirstSimbol } from './js/utils/utils';
import { props, BODY } from './js/constants/constants';

const preloader = new ResultPreloader('.result');
const popupSignIn = new PopupSignIn('#popup-template', BODY, header, mainApi);
const popupSuccess = new PopupSuccess('#popup-template', BODY, popupSignIn, header);
const popupSignUp = new PopupSignUp('#popup-template', BODY, popupSignIn, popupSuccess, header, mainApi);
const result = new Result('.main');

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

const callbacksSearch = {
  submitCallBack: (keyword) => {
    result.show('result_unvisible');
    // prel oader.render('result_unvisible');
    // preloader.remove('.result__search-in-progress');
    // preloader.show('result_unvisible');
    // preloader.remove('.result__search-in-progress');
    // result.show('.result__search-in-progress', 'result_unvisible');
    // apiNews.getNews(keyword)
    //   .then((masNews) => {
    //     if (masNews.totalResults === 0) {
    //       newsList.add = masNews.articles;
    //       result.show('.result__not-found', 'result_unvisible');
    //     }
    //     result.show('.result__found', 'result_unvisible');
    //   })
    //   .catch((err) => { throw new Error(err); })
    //   .finally(() => { result.hide('.result__search-in-progress', 'result_unvisible'); });
  },
};
const search = new Search('.main', callbacksSearch);
const about = new About('.main');
const footer = new Footer('.main');

header.render(props);
search.render();
result.render();
about.render();
footer.render();

// FORM_SEARCH.addEventListener('submit', (event) => {
//   // event.preventDefault();
//   // const keyword = FORM_SEARCH.elements.keyword.value;
//   if (RESULT_BLOCK.classList.contains('result_unvisible')) {
//     RESULT_BLOCK.classList.remove('result_unvisible');
//   }
//   if (!RESULT_NOT_FOUND.classList.contains('result_unvisible')) {
//     RESULT_NOT_FOUND.classList.add('result_unvisible');
//   }
//   if (!RESULT_FOUND.classList.contains('result_unvisible')) {
//     RESULT_FOUND.classList.add('result_unvisible');
//   }
//
//   apiNews.getNews(keyword)
//     .then((masNews) => {
//       if (masNews.totalResults === 0) {
//         RESULT_NOT_FOUND.classList.remove('result_unvisible');
//         return;
//       }
//       RESULT_FOUND.classList.remove('result_unvisible');
//       newsList.add = masNews.articles;
//       newsList.clearContainer();
//       newsList.clearCounter();
//       for (let i = 0; i < 3; i++) {
//         newsList.renderNews(newsList.list[i], (data) => {
//           const news = new NewsFounded('#news-template', data, getFormatDate, mainApi);
//           news.keyword = toUpperFirstSimbol(keyword);
//           return news.node;
//         });
//       }
//       RESULT_BUTTON.addEventListener('click', () => {
//         const countRender = newsList.counter + 3;
//         for (let i = newsList.counter; i < countRender; i++) {
//           newsList.renderNews(newsList.list[i], (data) => {
//             const news = new NewsFounded('#news-template', data, getFormatDate, mainApi);
//             news.keyword = toUpperFirstSimbol(keyword);
//             return news.node;
//           });
//           // FIXME: хреново работает
//           if (countRender === newsList.length) {
//             RESULT_BUTTON.classList.add('result__button-more_unvisible');
//             return;
//           }
//         }
//       });
//     })
//     .catch((err) => alert(err))
//     .finally(() => PRELOADER.classList.add('result_unvisible'));
// });
