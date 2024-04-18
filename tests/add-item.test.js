import { assertEquals } from "./test-framework.js";

import Basket from "../src/basket.js";
import Item from "../src/item.js";

// AFTER EACH Function
const afterEach = () => {
    expected = undefined;
    actual = undefined;
    result = undefined;
    item1 = undefined;
    testBasket.items = [];
};

//? TEST 1
//* Test item is actually added to basket

// Arrange
let item1, item2, item3
let actual, result

const testBasket = new Basket()
item1 = new Item('salmon', 5, 1)

//item2 = new Item('cheese', 3, 2)
//item3 = new Item('beef', 4, 3)

let expected = true

// Act
testBasket.addItem(item1)
actual = testBasket.items.includes(item1)

// Assert

result = assertEquals(actual, expected)

// Report
console.log(`Test 1 : Item is actually in basket:`);
console.log(`Test result: ${result ? 'Pass' : 'Fail'}`);

// Clean up
afterEach()

//! END OF TEST 1

//? TEST 2
//* After adding item to basket, does array Items increase in length by 1

// Arrange

expected = testBasket.items.length + 1

item1 = new Item('salmon', 5, 1)

//Act

testBasket.addItem(item1)
actual = testBasket.items.length

//Assert
result = assertEquals(actual, expected)

// Report
console.log(`Test 2 : After adding item to basket, does array Items increase in length by 1:`)
console.log(`Test result: ${result ? 'Pass' : 'Fail'}`);



