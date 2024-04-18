import Basket from "../src/basket.js";
import createRandomItem from "../src/create-random-item.js";

const testFullCapacity = () => {
  console.log("TEST: Items cannot be added when basket capacity is reached.");

  const basket = new Basket();

  const expectedLength = 5;

  for (let i = 0; i < 5; i++) {
    const item = createRandomItem(i);
    basket.addItem(item);
  }

  const item = createRandomItem(5);
  basket.addItem(item);

  const actualLength = basket.items.length;

  expectedLength === actualLength ? console.log("PASS") : console.log(`FAIL: Expected 5, actual ${actualLength}.`);
}

testFullCapacity();
