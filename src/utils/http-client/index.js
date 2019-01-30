import ky from 'ky';

class HttpClient {
  constructor() {
    this.instance = ky.extend({ prefixUrl: 'http://ergast.com/api/f1/' });
  }

  async get(endpoint, params) {
    const data = await this.instance.get(endpoint, { searchParams: params }).json();
    return data;
  }
}

export default new HttpClient();
