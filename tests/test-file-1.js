import { assertEquals } from "./test-framework.js";

import { Basket, Item } from "../index.js"

// Arrange
let item1, item2, item3

let expected 
let actual, result



const testBasket = new Basket()
item1 = new Item('salmon', 5, 1)
item2 = new Item('cheese', 3, 2)
item3 = new Item('beef',4,3)

// Act
testBasket.addItem(item1)


// Assert
actual = item1
expected = testBasket.getItems()[0]

result = assertEquals(actual, expected)

console.log(`Test result: ${result}`);



// Report