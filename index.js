export class Basket {
  constructor() {
    this.items = new Set();
    this.capacity = 5;
    this.totalValue = getTotalValue();
  }

  getItems() {
    return this.items;
  }

  addItem(item) {
    this.items.add(item);
  }

  removeItem(item) {
    this.items.delete(item);
  }

  getTotalValue() {
    let total = 0;
    for (const element of this.items) {
      total += element.price;
    }
    return total;
  }
}

export class Item {
  constructor(flavor, price, id) {
    this.flavor = flavor;
    this.price = price;
    this.id = id;
  }

  getFlavor() {
    return this.flavor;
  }

  getId() {
    return this.id;
  }

  getPrice() {
    return this.price;
  }
}