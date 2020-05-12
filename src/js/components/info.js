import '../../blocks/info/info.css';
import Info from '../classes/Info';

const info = new Info('.main');

info.createComponent(
  'section',
  ['info'],
  `<div class="info__container">
  <p class="roboto roboto_size_extra-large info__saved">Сохранённые статьи</p>
  <h1 class="roboto-slab roboto-slab_size_large info__title"><span class="info__user"></span>, у вас <span class="info__count-news"></span> <span class="info__suffix"></span> <span class="info__suffix_2"></span></h1>
  <h2 class="roboto roboto_size_extra-large info__subtitle"></h2>
</div>`,
);

export default info;
