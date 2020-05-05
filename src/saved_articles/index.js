import './index.css';
import Header from '../js/components/Header';
import NewsSaved from '../js/components/NewsSaved';
import { getFormatDate, sortNews } from '../js/utils/utils';
import {
  props, mainApi, newsList, INFO_USER, COUNT_NEWS,
} from '../js/constants/constants';

const header = new Header('#1A1B22');
let MAS_KEYWORD = [];
mainApi.getInfo()
  .then((info) => {
    props.isLoggedIn = true;
    props.userName = info[0].name;
    header.render(props);

    INFO_USER.textContent = info[0].name;
    COUNT_NEWS.textContent = info[1].length;

    info[1].map((news) => {
      newsList.renderNews(news, (data) => {
        const articles = new NewsSaved('#news-template', data, getFormatDate, mainApi);
        return articles.nodeSave;
      });
      MAS_KEYWORD.push(news.keyword);
    });
    MAS_KEYWORD = sortNews(MAS_KEYWORD);
    if (MAS_KEYWORD.length > 3) {
      for (let i = 0; i < 2; i++) {
        document.querySelector('.info__subtitle').insertAdjacentHTML('beforeend', `<span class="info__keywords">${MAS_KEYWORD[i][0]}, </span>`);
      }
      document.querySelector('.info__subtitle').insertAdjacentHTML('beforeend', `и <span class="info__keywords">${MAS_KEYWORD.length - 2} другим</span>`);
    } else {
      for (let i = 0; i < 3; i++) {
        document.querySelector('.info__subtitle').insertAdjacentHTML('beforeend', `<span class="info__keywords">${MAS_KEYWORD[i][0]}, </span>`);
      }
    }
  })
  .catch();
