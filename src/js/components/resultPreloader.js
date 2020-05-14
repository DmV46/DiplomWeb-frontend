import preload from '../../images/preload.png';
import ResultPreloader from '../classes/Result/ResultPreloader';

const preloader = new ResultPreloader();
// не видит контейнер потому что еще не отрисовалось
preloader.createComponent(
  'div',
  ['result__search-in-progress'],
  `
<img class="result__find-img result__find-img_spin" src="${preload}" alt="circle-placeload">
<p class="roboto roboto_size_extra-large result__find-text">Идет поиск новостей...</p>`,
);

export default preloader;
