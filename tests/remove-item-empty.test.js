import Basket from "../src/basket.js";

export default function testRemoveItemEmpty() {
  console.log("TEST: An item cannot be removed from an empty basket.");

  const expectedLength = 0;

  const basket = new Basket();
  
  basket.removeItem(0);

  const actualLength = basket.items.length;

  expectedLength === actualLength ? console.log("PASS") : console.log(`FAIL: Expected ${expectedLength}, actual ${actualLength}.`);
}
