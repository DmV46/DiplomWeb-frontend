import ApiFindNews from '../api/ApiFindNews';
import ApiNews from '../api/ApiNews';

export const ESCAPE_CODE = 27;

export const props = {
  isLoggedIn: false,
  userName: null,
};

// //////////////// //
//   API backend    //
// //////////////// //

export const apiFindNews = new ApiFindNews({
  url: 'https://api.find-news.ru',
  headers: {
    authorization: null,
    'Content-Type': 'application/json',
  },
});

// //////////////////////// //
//  API external resource   //
// //////////////////////// //

export const apiNews = new ApiNews({
  url: 'https://newsapi.org/v2/everything',
  apiKey: 'a5e22ff49bdf4b98bd01999682617eaa',
  from: Date.now() - 604800000,
  to: Date.now(),
  pageSize: 100,
});

// //////////////// //
//       body       //
// //////////////// //

export const BODY = document.querySelector('.main');

// //////////////// //
//   header block   //
// //////////////// //

export const HEADER = document.querySelector('.header');
export const HEADER_BUTTON = document.querySelector('.header__button');
export const HEADER_LINKS_CONTAINER = document.querySelector('.header__links-container');
export const CHECKBOX_MENU = document.querySelector('.header__mobile-menu');
export const LABEL_MENU = document.querySelector('.header__label');

// //////////////// //
//   form search    //
// //////////////// //

export const FORM_SEARCH = document.querySelector('.search__form');
