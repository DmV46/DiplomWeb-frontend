import './index.css';
import header from './js/components/header';
import search from './js/components/search';
import result from './js/components/result';
import about from './js/components/about';
import footer from './js/components/footer';

import { props } from './js/constants/constants';

header.render(props, '#fff');
document.querySelector('.header').classList.add('header_position');

search.render();

result.render();

about.render();

footer.render();
