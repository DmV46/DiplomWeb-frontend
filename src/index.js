import './index.css';
import header from './js/components/header';
import search from './js/components/search';
import result from './js/components/result';
import about from './js/components/about';
import footer from './js/components/footer';

import { props } from './js/constants/constants';

header.render(props, '#fff');
header.addClasslist('header_position');
document.querySelector('.header__links-container').lastElementChild.href = './saved_articles';

search.render();

result.render();

about.render();

footer.render();
