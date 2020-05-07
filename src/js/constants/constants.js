import MainApi from '../api/MainApi';
import ApiNews from '../api/ApiNews';
import NewsList from '../components/NewsList';
import { getIsoDate } from '../utils/utils';

export const ESCAPE_CODE = 27;

export const props = {
  isLoggedIn: false,
  userName: null,
};

export const VALIDATION_ERRORS = {
  EMPTY: 'Это обязательное поле',
  LENGTH: 'Должно быть от 2 до 30 символов',
  NOT_EMAIL: 'Некорректный адрес электронной почты',
  PASSWORD_LENGTH: 'Минимальная длина пароля 8 символов',
};

export const mainApi = new MainApi({
  url: 'https://api.find-news.ru',
  token: `Bearer ${localStorage.getItem('token')}`,
});

export const apiNews = new ApiNews({
  url: 'https://newsapi.org/v2/everything',
  apiKey: 'a5e22ff49bdf4b98bd01999682617eaa',
  from: getIsoDate('-604800000'),
  to: getIsoDate(),
  pageSize: 100,
});

export const newsList = new NewsList('.result__container');

export const BODY = document.querySelector('.main');
export const HEADER_BUTTON = document.querySelector('.header__button');
export const FORM_SEARCH = document.querySelector('.search__form');

export const PRELOADER = document.querySelector('.result__search-in-progress');
export const RESULT_BLOCK = document.querySelector('.result');
export const RESULT_NOT_FOUND = document.querySelector('.result__not-found');
export const RESULT_FOUND = document.querySelector('.result__found');
export const RESULT_BUTTON = document.querySelector('.result__button-more');

export const INFO_USER = document.querySelector('.info__user');
export const COUNT_NEWS = document.querySelector('.info__count-news');
