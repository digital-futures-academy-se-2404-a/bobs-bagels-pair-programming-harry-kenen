import Basket from "../src/basket.js";
import Item from "../src/item.js";

const testRemoveItem = () => {
  const basket = new Basket();
  const item = new Item("chocolate", 1.49, 0);

  basket.addItem(item);
  basket.removeItem(0);
  const newItems = basket.getItems();
  const newBasketItemsLength = newItems.length;

  return newBasketItemsLength === 0;
}

console.log("TEST: Items are successfully removed from basket.");
testRemoveItem() ? console.log("PASS") : console.log("FAIL");
