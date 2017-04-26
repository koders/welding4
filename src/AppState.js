import { observable, computed } from 'mobx';
import Product from './Product';
const request = require('superagent');

class AppState {
  @observable orders = [];
  @observable products = [];
  @observable newOrder = {products: []};

  constructor() {
  }

  fetchOrders() {
    const self = this;
    request
      .get('/api/orders')
      .end((err, res) => { self.orders = res.body });
  }
  
  fetchProducts() {
    const self = this;
    request
      .get('/api/products')
      .end((err, res) => { self.products = res.body });
  }
  
  addProduct(){
    this.newOrder.products.push(new Product(this.newOrder.products));
  }
  
}

export default new AppState();
