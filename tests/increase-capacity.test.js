import Basket from "../src/basket.js";
import Item from "../src/item.js";

const testIncreaseCapacity = () => {
  const createRandomItem = (id) => {
    // A function for creating random bagels based on a preset of flavors and prices. It takes an ID as an argument.
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
    const menuItem = menu[Math.floor(Math.random() * 3)]; // Picks a random item from the menu.
    const item = new Item(menuItem.flavor, menuItem.price, id);

    return item;
  }

  // Creates an inventory first so that all possible ID's are assigned from beginning.
  const inventory = new Array();
  for (let i = 0; i < 15; i++) {
    const item = createRandomItem(i);
    inventory.push(item);
  }

  // Creates a basket and adds 5 items to it from the inventory.
  const basket = new Basket();
  for (let i = 0; i < 5; i++) {
    basket.addItem(inventory.pop());
  }
  
  // Changes the capacity to 7, and then tries to add 2 more items from the inventory.
  basket.setCapacity(7);
  for (let i = 0; i < 2; i++) {
    basket.addItem(inventory.pop());
  }

  // If the 2 items were added successfully and the capacity increased, it returns true. Otherwise, it'll return false.
  return basket.items.length === 7;
}

console.log("TEST: Item capacity can be increased.");
testIncreaseCapacity() ? console.log("PASS") : console.log("FAIL");
