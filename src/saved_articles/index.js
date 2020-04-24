import './index.css';
import Header from '../js/components/Header';
import { props } from '../js/constants/constants';

const header = new Header('#1A1B22');
// props.isLoggedIn = false;
header.render(props);
document.querySelectorAll('.header__link')[1].classList.add('header__link_selected');
