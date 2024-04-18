import Item from "./item.js";

export default function createRandomItem(id) {
  // A function for creating random bagels based on a preset of flavors and prices. It takes an ID as an argument.
  const menu = [
    {
      "flavor": "chocolate",
      "price": 1.79
    },
    {
      "flavor": "plain",
      "price": 1.29
    },
    {
      "flavor": "cream",
      "price": 1.59
    }
  ];
  const menuItem = menu[Math.floor(Math.random() * 3)]; // Picks a random item from the menu.
  const item = new Item(menuItem.flavor, menuItem.price, id);

  return item;
}