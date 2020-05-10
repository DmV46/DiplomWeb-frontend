import notFound from '../../images/not-found.svg';
import ResultNotFound from '../classes/Result/ResultNotFound';

const resultNotFound = new ResultNotFound('.result');

resultNotFound.createComponent(
  'div',
  ['result__not-found'],
  `
  <img class="result__find-img" src="${notFound}" alt="not-found">
  <h2 class="roboto-slab roboto-slab_size_medium result__not-found-text">Ничего не найдено</h2>
  <p class="roboto roboto_size_extra-large result__find-text">К сожалению по вашему запросу ничего не найдено.</p>`,
);

export default resultNotFound;
