import '../../blocks/search/search.css';
import Search from '../classes/Search';
import apiNews from '../api/instances/apiNews';
import result from './result';
import preloader from './resultPreloader';
import resultNotFound from './resultNotFound';
import resultFound from './resultFound';

const callbacksSearch = {
  submitCallBack: (keyword) => {
    result.removeChildAll('.result');
    result.show('result_unvisible');
    preloader.render('.result');
    apiNews.getNews(keyword)
      .then((arrayNews) => {
        if (arrayNews.totalResults === 0) {
          resultNotFound.render('.result');
          return;
        }
        resultFound.render('.result');
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
