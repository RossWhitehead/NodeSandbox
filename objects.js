// Object literals
var customer = { firstname: 'Ross', lastname: 'Whitehead' };
customer.email = 'ross.whitehead@acmetrading.com';
customer.fullname = function () { return fistname + ' ' + lastname; };

// Constructor functions
function Product(name, description){
    this.name = name;
    this.description = description;
}
var product = new Product('Product 1', 'Description 1');

// ES6 classes
class Order{
    constructor(orderId, orderDate){
        this.orderId = orderId;
        this.orderDate = orderDate;
    }
}
var order = new Order(123456, '2012-12-1 10:43');