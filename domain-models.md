# Domain Models

| Objects | Properties | Messages | Output |
| --- | --- | --- | --- |
| Basket | items(@Set[@Item]) | getItems() | @Array[@Items] |
| | | addItem(@Item) | void |
| | | removeItem(@Item) | void |
| | capacity(@Number) | getCapacity() | @Number |
| | | isFull() | @Boolean |
| | | setCapacity(@Number) | void |
| | totalValue(@Number) | getTotalValue() | @Number |
| Item | flavor(@String) | getFlavor() | @String |
| | id(@String) | getId() | @String |
| | price(@Number) | getPrice() | @Number |


Link to Kanban board : https://miro.com/app/board/uXjVKTd0PD8=/