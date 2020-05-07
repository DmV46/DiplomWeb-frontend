import ApiNews from '../api/ApiNews';
import { getIsoDate } from '../utils/utils';

const apiNews = new ApiNews({
  url: 'https://newsapi.org/v2/everything',
  apiKey: 'a5e22ff49bdf4b98bd01999682617eaa',
  from: getIsoDate('-604800000'),
  to: getIsoDate(),
  pageSize: 100,
});

export default apiNews;
