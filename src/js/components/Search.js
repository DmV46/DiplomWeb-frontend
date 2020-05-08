import BaseComponent from './BaseComponent';

const search = `
<div class="search__container">
  <h1 class="roboto-slab roboto-slab_size_extra-large search__title">Что в мире творится?</h1>
  <h2 class="roboto roboto_size_extra-large search__subtitle">Находите самые свежие статьи на любую тему и сохраняйте в своём личном кабинете.</h2>
  <form class="search__form">
    <input class="roboto roboto_size_large search__input" type="text" name="keyword" placeholder="Введите тему новости" required>
    <button class="button search__button" type="submit">Искать</button>
  </form>
</div>`;

export default class Search extends BaseComponent {
  constructor(selector, { submitCallBack }) {
    super(selector);
    this._submitCallback = submitCallBack;
    this._hendlerSubmit = this._hendlerSubmit.bind(this);
  }

  render() {
    super._createComponent(
      'section',
      ['search'],
      search,
    );
    super._render(this._component);
    this._setEventListeners();
  }

  _hendlerSubmit(event, keyword) {
    event.preventDefault();
    this._submitCallback(keyword);
  }

  _setEventListeners() {
    this._container.querySelector('.search__form').addEventListener('submit', (event) => {
      const keyword = this._container.querySelector('.search__form').elements.keyword.value;
      this._hendlerSubmit(event, keyword);
    });
  }
}
