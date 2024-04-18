import testFullCapacity from "./full-capacity.test.js";
import testIncreaseCapacity from "./increase-capacity.test.js";
import testRemoveItem from "./remove-item.test.js";
import testRemoveItemEmpty from "./remove-item-empty.test.js";
import testDecreaseCapacityToOverflow from "./decrease-capacity-overflow.test.js";

const tests = [
  testFullCapacity,
  testIncreaseCapacity,
  testRemoveItem,
  testRemoveItemEmpty,
  testDecreaseCapacityToOverflow
];

tests.forEach((test, i) => {
  console.log(`=== TEST #${i + 1} ===`);
  test();
});