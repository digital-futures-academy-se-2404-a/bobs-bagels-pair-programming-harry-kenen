import Basket from "../src/basket.js";
import createRandomItem from "../src/create-random-item.js";

const testIncreaseCapacity = () => {
  console.log("TEST: Item capacity can be increased.");

  const expectedCapacity = 7;

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

  const actualCapacity = basket.getCapacity();

  // If the 2 items were added successfully and the capacity increased, it returns true. Otherwise, it'll return false.
  expectedCapacity === actualCapacity ? console.log("PASS") : console.log(`FAIL: Expected ${expectedCapacity}, actual ${actualCapacity}.`);
}

testIncreaseCapacity();
