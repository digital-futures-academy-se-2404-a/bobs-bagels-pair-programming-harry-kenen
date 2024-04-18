import Basket from "../src/basket.js";
import createRandomItem from "../src/create-random-item.js";

export default function testDecreaseCapacityToOverflow() {
  console.log("TEST: Capacity of basket cannot be decreased such that it must overflow.")
  const basket = new Basket();

  for (let i = 0; i < 5; i++) {
    const item = createRandomItem(i);
    basket.addItem(item);
  }

  const expectedCapacity = 5;

  basket.setCapacity(3);

  const actualCapacity = basket.getCapacity();

  expectedCapacity === actualCapacity ? console.log("PASS") : console.log(`FAIL: Expected capacity ${expectedCapacity}, actual capacity ${actualCapacity}.`);
}