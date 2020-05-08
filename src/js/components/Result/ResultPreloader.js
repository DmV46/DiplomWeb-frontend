import preload from '../../../images/preload.png';
import BaseComponent from '../BaseComponent';

const preloader = `<div class="result__search-in-progress result_unvisible">
<img class="result__find-img result__find-img_spin" src="${preload}"  alt="circle-placeload">
<p class="roboto roboto_size_extra-large result__find-text">Идет поиск новостей...</p>
</div>`;

export default class ResultPreloader extends BaseComponent {
  render() {
    this._component = preloader;
    super.render(this._component);
  }
}
