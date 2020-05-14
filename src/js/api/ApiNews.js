function getResponseData(response) {
  if (response.ok) {
    return response.json();
  }

  return Promise.reject(new Error(`Ошибка: ${response.status}`));
}
export default class ApiNews {
  constructor(param) {
    this._url = param.url;
    this._apiKey = param.apiKey;
    this._from = param.from;
    this._to = param.to;
    this._pageSize = param.pageSize;
  }

  async getNews(keyword) {
    const response = await fetch(`${this._url}?q=${keyword}&apiKey=${this._apiKey}&from=${this._from}&to=${this._to}&pageSize=${this._pageSize}`);
    return getResponseData(response);
  }
}
