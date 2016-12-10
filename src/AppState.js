import { observable } from 'mobx';
const request = require('superagent');

class AppState {
  @observable orders = [];

  constructor() {
  }

  fetchOrders() {
    const self = this;
    request
      .get('/api/orders')
      .end((err, res) => { self.orders = res.body });
  }
}

export default new AppState();
