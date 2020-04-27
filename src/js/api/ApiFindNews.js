function getResponseData(response) {
  if (response.ok) {
    return response.json();
  }

  return Promise.reject(new Error(`Ошибка: ${response.status}`));
}

export default class ApiFindNews {
  constructor(param) {
    this._url = param.url;
    this.headers = param.headers;
  }

  async signUp(email, password, name) {
    const response = await fetch(`${this._url}/signup`, {
      method: 'POST',
      headers: this.headers,
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
      headers: this.headers,
      body: JSON.stringify({
        email,
        password,
      }),
    });

    return getResponseData(response);
  }

  async getMe() {
    const response = await fetch(`${this._url}/users/me`, {
      headers: this.headers,
    });

    return getResponseData(response);
  }
}
