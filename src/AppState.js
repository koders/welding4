import { observable } from 'mobx';
const request = require('superagent');

class AppState {
  @observable message = 'Not initialized';

  constructor() {
    this.fetchMessage();
  }

  fetchMessage() {
    const self = this;
    request
      .get('/api/test')
      .end((err, res) => { self.message = res.text });
  }
}

export default new AppState();
