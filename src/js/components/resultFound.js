import search from './search';
import ResultFound from '../classes/Result/ResultFound';
import NewsFounded from '../classes/NewsFounded';
import { toUpperFirstSimbol, getFormatDate } from '../utils/utils';

const callBackResultFound = {
  moreNewsCallBack: () => {
    const { keyword } = search;
    const countRender = this.countNews + 3;
    for (let i = this.countNews; i < countRender; i++) {
      this.renderNews(this.list[i], (data) => {
        const callbacksNewsFounded = {

        };
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

const resultFound = new ResultFound(callBackResultFound);

resultFound.createComponent(
  'div',
  ['result__found'],
  `
<h2 class="roboto-slab roboto-slab_size_large result__title" >Результаты поиска</h2>
<div class="result__container result__container_position_large"></div>
<button class="button result__button-more">Показать еще</button>`,
);

export default resultFound;
