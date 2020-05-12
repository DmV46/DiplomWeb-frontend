import '../../blocks/search/search.css';
import favoritesBlue from '../../images/favorites_blue.svg';
import favorites from '../../images/favorites.svg';
import Search from '../classes/Search';
import apiNews from '../api/instances/apiNews';
import mainApi from '../api/instances/mainApi';
import result from './result';
import preloader from './resultPreloader';
import resultNotFound from './resultNotFound';
import resultFound from './resultFound';
import { toUpperFirstSimbol, getFormatDate } from '../utils/utils';
import NewsFounded from '../classes/News/NewsFounded';

const callbacksSearch = {
  submitCallBack: (keyword) => {
    result.removeChildAll();
    result.show('result_unvisible');
    preloader.render('.result');
    apiNews.getNews(keyword)
      .then((arrayNews) => {
        if (arrayNews.totalResults === 0) {
          resultNotFound.render('.result');
          return;
        }
        resultFound.render('.result');
        resultFound.clearContainer();
        resultFound.list = arrayNews.articles;
        for (let i = 0; i < 3; i++) {
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
                .catch((err) => alert(err));
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
      })
      .catch((err) => { throw new Error(err); })
      .finally(() => {
        preloader.remove();
      });
  },
};

const search = new Search('.main', callbacksSearch);

search.createComponent(
  'section',
  ['search'],
  `
<div class="search__container">
  <h1 class="roboto-slab roboto-slab_size_extra-large search__title">Что в мире творится?</h1>
  <h2 class="roboto roboto_size_extra-large search__subtitle">Находите самые свежие статьи на любую тему и сохраняйте в своём личном кабинете.</h2>
  <form class="search__form">
    <input class="roboto roboto_size_large search__input" type="text" name="keyword" placeholder="Введите тему новости" required>
    <button class="button search__button" type="submit">Искать</button>
  </form>
</div>`,
);

export default search;
