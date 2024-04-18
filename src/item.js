export default class Item {
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