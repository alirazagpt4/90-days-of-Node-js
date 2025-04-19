const PizzaShop = require("./pizzashop");
const shop = new PizzaShop();

shop.on("order", (size, toppings) => {
    console.log(`Baking a ${size} pizza with: ${toppings.join(", ")}`);
    console.log("Sending Order to the Kitchen.");
});

shop.orders("large", "extra cheese", "black olives" , "mushrooms"); // 👈 correct arguments
