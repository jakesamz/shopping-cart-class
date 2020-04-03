import Vue from 'https://dev.jspm.io/vue/dist/vue';

export class ShoppingCart {

  list = {};

  constructor() {
    //this.list = {}
  }

  add(item) {
    let exist = Object.keys(this.list).includes((item.id));
    if(exist) {
      this.list[item.id].count++;
    }else{
      Vue.set(this.list, item.id, {"id": item.id, "name": item.name, count: 1, price: item.price });
    }
  }

  remove(item) {
    if(!this.list[item.id]) return;
   
    this.list[item.id].count--;

    if(this.list[item.id].count == 0) {
        delete this.list[item.id];
    }
  }

  count() {
    let items = Object.values(this.list)
    let total = items.reduce((total, item )=> {
      return total += item.count;
    }, 0);
    return total;
  }

  totalPrice() {
    let items = Object.values(this.list)
    let total = items.reduce((total, item )=> {
      return total += item.price * item.count;
    }, 0);
    return total;
  }
}