import './index.css';
import Header from '../../js/components/Header';
import { props, BTN_AUTH, BODY } from '../../js/constants/constants';
import PopupSugnUp, {} from '../../js/components/PopupSignUp';

const header = new Header('header_color_white');
const popupSignUp = new PopupSugnUp('#popup-template', BODY);
header.render(props);

BTN_AUTH.addEventListener('click', () => popupSignUp.setContent());
