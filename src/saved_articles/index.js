import './index.css';
import Header from '../js/components/Header';
import { props } from '../js/constants/constants';

const header = new Header('header_color_black');
// временно
props.isLoggedIn = true;
props.userName = 'Дмитрий';
//
header.render(props);
