import preload from '../../../images/preload.png';
import BaseComponent from '../BaseComponent';

const preloader = `
<img class="result__find-img result__find-img_spin" src="${preload}" alt="circle-placeload">
<p class="roboto roboto_size_extra-large result__find-text">Идет поиск новостей...</p>`;

export default class ResultPreloader extends BaseComponent {
  render() {
    super._createComponent(
      'div',
      ['result__search-in-progress'],
      preloader,
    );
    super._render(this._component);
  }
}
