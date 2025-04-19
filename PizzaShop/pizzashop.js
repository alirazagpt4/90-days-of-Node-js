const EventEmitter = require("events");

class PizzaShop extends EventEmitter {
    orders(size, ...toppings) {
        console.log(`Order received for a ${size} pizza`);
        this.emit('order', size, toppings); // 👈 toppings as array
    }
}

module.exports = PizzaShop;
