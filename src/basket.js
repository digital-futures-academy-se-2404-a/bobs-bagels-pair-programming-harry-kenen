export default class Basket {
  constructor() {
    this.items = new Array();
    this.capacity = 5;
    this.totalValue = this.getTotalValue();
  }

  getItems() {
    return this.items;
  }

  getCapacity() {
    return this.capacity;
  }

  setItems(items) {
    this.items = items;
  }

  addItem(item) {
    if (this.items.length >= this.capacity) {
      console.log("Your basket is full! The bagel could not be added, please remove a bagel or get a larger basket")
      return;
    }
    this.items.push(item);
  }

  removeItem(itemId) {
    this.items.forEach((item) => {
      if (item.id === itemId) {
        this.items.pop(item);
      }
    })
  }

  getTotalValue() {
    let total = 0;
    for (const element of this.items) {
      total += element.price;
    }
    return total;
  }

  setCapacity(newCapacity) {
    if (newCapacity < this.items.length) {
      return;
    }
    this.capacity = newCapacity;
  }
}