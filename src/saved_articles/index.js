import './index.css';
import Header from '../js/classes/Header';
import NewsSaved from '../js/classes/NewsSaved';
// import mainApi from '../js/instances/mainApi';
import { getFormatDate, sortNews } from '../js/utils/utils';
import {
  props, INFO_USER, COUNT_NEWS, RESULT_BLOCK,
} from '../js/constants/constants';

const header = new Header('#1A1B22');
const MAS_KEYWORD = [];

// mainApi.getInfo()
//   .then((info) => {
//     props.isLoggedIn = true;
//     props.userName = info[0].name;
//     header.render(props);

//     INFO_USER.textContent = info[0].name;
//     COUNT_NEWS.textContent = info[1].length;
//     RESULT_BLOCK.classList.remove('result_unvisible');
//     if (info[1].length !== 0) {
//       // RESULT_BLOCK.classList.remove('result_unvisible');
//       info[1].map((news) => {
//         newsList.renderNews(news, (data) => {
//           const articles = new NewsSaved('#news-template', data, getFormatDate, mainApi);
//           return articles.nodeSave;
//         });
//         MAS_KEYWORD.push(news.keyword);
//       });
//       MAS_KEYWORD = sortNews(MAS_KEYWORD);
//       if (MAS_KEYWORD.length !== 0) {
//         if (MAS_KEYWORD.length > 3) {
//           for (let i = 0; i < 2; i++) {
//             document.querySelector('.info__subtitle').insertAdjacentHTML('beforeend', `<span class="info__keywords">${MAS_KEYWORD[i][0]}, </span>`);
//           }
//           document.querySelector('.info__subtitle').insertAdjacentHTML('beforeend', `и <span class="info__keywords">${MAS_KEYWORD.length - 2} другим</span>`);
//         } else {
//           for (let i = 0; i < MAS_KEYWORD.length; i++) {
//             document.querySelector('.info__subtitle').insertAdjacentHTML('beforeend', `<span class="info__keywords">${MAS_KEYWORD[i][0]}, </span>`);
//           }
//         }
//       }
//     }
//   })
//   .catch();
