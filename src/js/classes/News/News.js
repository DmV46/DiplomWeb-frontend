import BaseComponent from '../BaseComponent';

export default class News extends BaseComponent {
  _createComponent() {
    super.createComponent(
      'div',
      ['result__news'],
      `
      <a class="result__news-link" href="#" target="_blank"></a>
      <div class="result__news-selected">
        <span class="roboto roboto_weight_medium result__news-tooltip"></span>

      </div>
      <div class="result__news-img-container">
        <img class="result__news-img" src="" alt="news-image">
      </div>
      <div class="result__news-description" >
        <p class="source-sans-pro source-sans-pro_size_medium result__news-date"></p>
        <p class="roboto-slab roboto-slab_size_medium result__news-title"></p>
        <div class="roboto roboto_size_large result__news-text"></div>
        <p class="roboto-slab roboto-slab_size_extra-small result__news-source"></p>
      </div>`,
    );
  }
}
