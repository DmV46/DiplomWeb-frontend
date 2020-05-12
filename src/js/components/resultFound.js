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
      if (resultFound.countNews === (resultFound.list.length)) {
        document.querySelector('.result__button-more').classList.add('result__button-more_unvisible');
        return;
      }
      const news = new NewsFounded('.result__container');
      news.keyword = toUpperFirstSimbol(keyword);
      const callbacksNews = {
        getFormatDateCallback: (date) => { getFormatDate(date); },
        saveNewsCallback: (event, dt, kw) => {
          const elementDOM = event.target;
          mainApi.saveNews(dt, kw)
            .then((res) => {
              elementDOM.style.backgroundImage = `url(${favoritesBlue})`;
              elementDOM.closest('.result__news').classList.add('result__news_saved');
              news.articleId = res._id;
            })
            .catch((err) => console.log(err));
        },
        deleteNewsCallback: (event, articleId) => {
          const elementDOM = event.target;
          mainApi.deleteNews(articleId)
            .then(() => {
              news.articleId = null;
              elementDOM.style.backgroundImage = `url(${favorites})`;
              elementDOM.closest('.result__news').classList.remove('result__news_saved');
            })
            .catch((err) => alert(err));
        },
      };
      news.callbacks = callbacksNews;
      news.render(resultFound.list[i]);
      resultFound.countNews += 1;
    }
  },
};

resultFound.callbacks = callBackResultFound;

export default resultFound;
