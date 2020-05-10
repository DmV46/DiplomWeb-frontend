import search from './search';
import favoritesBlue from '../../images/favorites_blue.svg';
import favorites from '../../images/favorites.svg';
import mainApi from '../api/instances/mainApi';
import ResultFound from '../classes/Result/ResultFound';
import NewsFounded from '../classes/News/NewsFounded';
import { toUpperFirstSimbol, getFormatDate } from '../utils/utils';

const resultFound = new ResultFound();

resultFound.createComponent(
  'div',
  ['result__found'],
  `
<h2 class="roboto-slab roboto-slab_size_large result__title" >Результаты поиска</h2>
<div class="result__container result__container_position_large"></div>
<button class="button result__button-more">Показать еще</button>`,
);

const callBackResultFound = {
  moreNewsCallBack: () => {
    const { keyword } = search;
    const countRender = resultFound.countNews + 3;
    for (let i = resultFound.countNews; i < countRender; i++) {
      const news = new NewsFounded('.result__container');
      news.keyword = toUpperFirstSimbol(keyword);
      const callbacksNews = {
        getFormatDateCallback: (date) => { getFormatDate(date); },
        saveNewsCallback: (dt, kw) => {
          mainApi.saveNews(dt, kw)
            .then((res) => {
              document.querySelector('.result__news-selected-icon').src = favoritesBlue;
              document.classList.add('result__news_saved');
              news.articleId = res._id;
            })
            .catch((err) => alert(err));
        },
        deleteNewsCallback: (articleId) => {
          mainApi.deleteNews(articleId)
            .catch((err) => alert(err));
          news.articleId = null;
          document.querySelector('.result__news-selected-icon').src = favorites;
          document.classList.remove('result__news_saved');
        },
      };
      news.callbacks = callbacksNews;
      news.render(resultFound.list[i]);
      resultFound.countNews += 1;

      if (countRender === resultFound.length) {
        document.querySelector('.result__button-more').classList.add('result__button-more_unvisible');
        return;
      }
    }
  },
};

resultFound.callbacks = callBackResultFound;

export default resultFound;
