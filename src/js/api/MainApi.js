function getResponseData(response) {
  if (response.ok) {
    return response.json();
  }
  return Promise.reject(response.json());
}

export default class MainApi {
  constructor({ url, token }) {
    this._url = url;
    this._token = token;
  }

  async signUp(email, password, name) {
    const response = await fetch(`${this._url}/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
        name,
      }),
    });

    return getResponseData(response);
  }

  async signIn(email, password) {
    const response = await fetch(`${this._url}/signin`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    return getResponseData(response);
  }

  async getUserData() {
    const response = await fetch(`${this._url}/users/me`, {
      headers: {
        authorization: this._token,
      },
    });

    return getResponseData(response);
  }

  async getArticles() {
    const response = await fetch(`${this._url}/articles`, {
      headers: {
        authorization: this._token,
      },
    });

    return getResponseData(response);
  }

  getInfo() {
    return Promise.all([this.getUserData(), this.getArticles()]);
  }

  async saveNews(news, keyword) {
    const response = await fetch(`${this._url}/articles`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        authorization: this._token,
      },
      body: JSON.stringify({
        keyword,
        title: news.title,
        text: news.description,
        date: news.publishedAt,
        source: news.source.name,
        link: news.url,
        image: news.urlToImage,
      }),
    });

    return getResponseData(response);
  }

  async deleteNews(newsID) {
    const response = await fetch(`${this._url}/articles/${newsID}`, {
      method: 'DELETE',
      headers: {
        authorization: this._token,
      },
    });
    return getResponseData(response);
  }
}
