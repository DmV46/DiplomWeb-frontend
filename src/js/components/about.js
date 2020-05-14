import '../../blocks/about/about.css';
import mobileAvatar from '../../images/avatar_mobile.png';
import tabletAvatar from '../../images/avatar_tablet.png';
import desctopAvatar from '../../images/avatar_desktop.png';

import About from '../classes/About';

const about = new About('.main');

about.createComponent(
  'section',
  ['about'],
  `
<div class="about__container">
  <picture class="about__fhoto-container">
    <source srcset="${mobileAvatar}" media="(max-width: 320px)">
    <source srcset="${tabletAvatar}" media="(max-width: 768px)">
    <img src="${desctopAvatar}" alt="fhoto">
  </picture>
  <div class="about__text-container">
    <h2 class="roboto-slab roboto-slab_size_large about__title">Об авторе</h2>
    <p class="roboto roboto_size_extra-large about__text">Это блок с описанием автора проекта. Здесь следует указать, как вас зовут, чем вы занимаетесь, какими технологиями разработки владеете.</p>
    <p class="roboto roboto_size_extra-large about__text">Также можно рассказать о процессе обучения в Практикуме, чему вы тут научились, и чем можете помочь потенциальным заказчикам.</p>
  </div>
</div>`,
);

export default about;
