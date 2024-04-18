import Basket from "../src/basket.js";
import createRandomItem from "../src/create-random-item.js";

const testIncreaseCapacity = () => {
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
