import { observable } from 'mobx';
const request = require('superagent');

class AppState {
  @observable message = 'Not initialized';
  @observable orders = [];

  constructor() {
    this.fetchMessage();
  }

  fetchMessage() {
    const self = this;
    request
      .get('/api/test')
      .end((err, res) => { self.message = res.text });
  }
  
  fetchOrders() {
    const self = this;
    request
      .get('/api/orders')
      .end((err, res) => { console.log(res);self.orders = res.body });
  }
}

export default new AppState();
