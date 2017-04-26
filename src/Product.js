import {observable, computed} from 'mobx';

export default class Product {

  collection;
  @observable pno;
  @observable description;
  @observable pcs;
  @observable price;

  constructor(collection) {
    console.log(collection);
    this.collection = collection;
    this.pno = '';
    this.description = '';
    this.pcs = '';
    this.price = '';
  }

  @computed get total() {
    const total = this.price * this.pcs; 
    return total.toFixed(2);
  }
  
  destroy() {
    this.collection.remove(this);
  }
  
}
