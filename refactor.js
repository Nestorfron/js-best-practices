let inventory = [
  {
    name: "apples",
    id: 1,
    quantity: 20,
    price: 0.85,
  },
  {
    name: "bananas",
    quantity: 10,
    id: 2,
    price: 1.25,
  },
  {
    name: "cherries",
    quantity: 5,
    price: 2.5,
    id: 3,
  },
  {
    name: "dates",
    quantity: 2,
    price: 3.0,
    id: 4,
  },
  {
    name: "elderberries",
    quantity: 1,
    price: 4.0,
    id: 5,
  },
  {
    name: "Watermelon",
    quantity: 0,
    price: 5.0,
    id: 6,
  },
  {
    name: "grapes",
    quantity: 0,
    price: 6.0,
    id: 7,
  },
];

let order = {
  country: "United States",
  items: [
    {
      id: 1,
      quantity: 5,
    },
    {
      id: 2,
      quantity: 1,
    },
    {
      id: 6,
      quantity: 1,
    },
  ],
};

function processOrder(order, inventory) {
  let shipping = 0;
  let grand_total = 0;
  let total_items_ = 0;
  let total_items_Price = 0;
  let total_items_Tax = 0;
  let total_items_Shipping = 0;
  let total_items_GrandTotal = 0;

  for (const orderItems of order.items) {   
    // Get the item details
    let item_price = 0;
    let itemTax = 0;
    let itemShipping = 0;
    let itemGrandTotal = 0;

    for (const itemOfInventory of inventory) {
      // Find the item in the inventory
      if (itemOfInventory.id === orderItems.id) {
        item_price = itemOfInventory.price;
        itemTax = item_price * 0.1;
        itemShipping = item_price * 0.05;
        itemGrandTotal = item_price + itemTax + itemShipping;
        total_items_Price += item_price * orderItems.quantity;
        total_items_Tax += itemTax * orderItems.quantity;
        total_items_Shipping += itemShipping * orderItems.quantity;
        total_items_GrandTotal += itemGrandTotal * orderItems.quantity;
        total_items_ += orderItems.quantity;
        break;
      }
    }
  }

  if (order.country === "United States") shipping = 5
  if (order.country === "Canada") shipping = 10
  else shipping = 15 

  grand_total = total_items_Price + total_items_Tax + shipping;

  return {
    total_items_Price,
    shipping,
    total_items_Tax,
    grand_total,
    total_items_,
    total_items_Shipping,
    total_items_GrandTotal,
  };
}

console.log(processOrder(order, inventory));

  // total: 10.5,
  // shipping: 15,
  // tax: 1.05,
  // grand_total: 26.55,
  // total_items_: 7,
  // total_items_Price: 10.5,
  // total_items_Tax: 1.05,
  // total_items_Shipping: 0.525,
  // total_items_GrandTotal: 12.075

