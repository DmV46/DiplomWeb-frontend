import '../../blocks/footer/footer.css';
import iconGH from '../../images/icon-github.svg';
import iconFB from '../../images/icon-facebook.svg';
import Footer from '../classes/Footer';


const footer = new Footer('.main');

footer.createComponent(
  'footer',
  ['footer'],
  `
<div class="footer__container">
  <p class="roboto roboto_size_large footer__copyright">&#169; 2020 Supersite, Powered by News API</p>
  <div class="footer__navigation">
    <div class="footer__links">
      <a class="roboto roboto_size_extra-large footer__link" href="./">Главная</a>
      <a class="roboto roboto_size_extra-large footer__link" href="https://praktikum.yandex.ru" target="_blank">Яндекс.Практикум</a>
    </div>
    <div class="footer__socials">
      <a class="footer__social" href="https://github.com/DmV46" target="_blank">
        <img class="footer__img" src="${iconGH}" alt="github">
      </a>
      <a class="footer__social" href="https://www.facebook.com/yandex.praktikum" target="_blank">
        <img class="footer__img" src="${iconFB}" alt="facebook">
      </a>
    </div>
  </div>
</div>`,
);

export default footer;
