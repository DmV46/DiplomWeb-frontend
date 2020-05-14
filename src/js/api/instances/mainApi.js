import MainApi from '../MainApi';

const mainApi = new MainApi({
  url: 'https://api.find-news.ru',
  token: `Bearer ${localStorage.getItem('token')}`,
});

export default mainApi;
