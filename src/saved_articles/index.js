import './index.css';
import iconGH from '../images/icon-github.svg';
import iconFB from '../images/icon-facebook.svg';
import header from '../js/components/header';
import resultSaved from '../js/components/resultSaved';
import footer from '../js/components/footer';
import { props } from '../js/constants/constants';
import info from '../js/components/info';
import mainApi from '../js/api/instances/mainApi';
import NewsSaved from '../js/classes/News/NewsSaved';
import { getFormatDate, sortNews } from '../js/utils/utils';

mainApi.getInfo()
  .then((data) => {
    const user = data[0];
    const arrayNews = data[1];
    props.isLoggedIn = true;
    props.userName = user.name;

    header.render(props, '#1A1B22');
    info.render();
    resultSaved.render();
    footer.render();
    document.querySelector('.header__logo').href = '../';
    document.querySelector('.header__links-container').firstElementChild.href = '../';
    document.querySelector('.header__link_selected').href = './';
    document.querySelector('.footer__links').firstElementChild.href = '../';
    document.querySelectorAll('.footer__img')[0].src = `.${iconGH}`;
    document.querySelectorAll('.footer__img')[1].src = `.${iconFB}`;

    info.user = user.name;
    info.countNews = arrayNews.length;
    resultSaved.show('result_unvisible');

    const masKeyword = [];

    if (info.countNews !== 0) {
      arrayNews.map((news) => {
        const newsSaved = new NewsSaved('.result__container');
        const callbacksNews = {
          getFormatDateCallback: (date) => { getFormatDate(date); },
          deleteNewsCallback: (event, articleId) => {
            mainApi.deleteNews(articleId)
              .then(() => {
                info.countNews -= 1;

                for (let i = 0; i < masKeyword.length; i++) {
                  const deleteKeyword = event.target.closest('.result__news').querySelector('.result__keywords').textContent;
                  if (masKeyword[i] === deleteKeyword) {
                    masKeyword.splice(i, 1);
                    break;
                  }
                }
                info.updateInfo(sortNews(masKeyword));
              })
              .catch((err) => alert(err));
          },
        };
        newsSaved.callbacks = callbacksNews;
        newsSaved.render(news);
        masKeyword.push(news.keyword);
      });

      info.updateInfo(sortNews(masKeyword));
    } else {
      info.updateInfo(sortNews(masKeyword));
    }
  })
  .catch();
