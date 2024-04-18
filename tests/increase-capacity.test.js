import { Basket, Item } from "../index.js";

const testIncreaseCapacity = () => {
  const createRandomItem = (id) => {
    const menu = [
      {
        "flavor": "chocolate",
        "price": 1.79
      },
      {
        "flavor": "plain",
        "price": 1.29
      },
      {
        "flavor": "cream",
        "price": 1.59
      }
    ];
    const randomNumber = Math.floor(Math.random() * 3);
    const menuItem = menu[randomNumber];
    const item = new Item(menuItem.flavor, menuItem.price, id);

    return item;
  }

  const inventory = new Array();
  for (let i = 0; i < 15; i++) {
    const item = createRandomItem(i);
    inventory.push(item);
  }

  const basket = new Basket();
  for (let i = 0; i < 5; i++) {
    basket.addItem(inventory.pop());
  }
  
  basket.setCapacity(7);
  for (let i = 0; i < 2; i++) {
    basket.addItem(inventory.pop());
  }

  return basket.items.length === 7;
}

console.log("TEST: Item capacity can be increased.");
testIncreaseCapacity() ? console.log("PASS") : console.log("FAIL");
