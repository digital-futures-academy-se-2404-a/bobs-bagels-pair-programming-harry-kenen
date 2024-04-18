import Basket from "../src/basket.js";
import createRandomItem from "../src/create-random-item.js";

export default function testRemoveItem() {
  console.log("TEST: Items can be removed from basket.");

  const basket = new Basket();
  const expectedLength = 0;
  const item = createRandomItem(0);

  basket.addItem(item);
  basket.removeItem(0);

  const actualLength = basket.items.length;

  expectedLength === actualLength ? console.log("PASS") : console.log(`FAIL: Expected ${expectedLength}, actual ${actualLength}.`);
}
