import './index.css';
import Header from '../js/components/Header';
import { props } from '../js/constants/constants';

const header = new Header('header_color_black', props);
// временно
header.propsUser.userName = 'Дмитрий';
header.propsUser.isLoggedIn = true;
//
header.render();
