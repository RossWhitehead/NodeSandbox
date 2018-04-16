'use strict'

// Functions have a prototype property.
// A functions prototype is the object instance that will become the
// prototype for all objects created using the function as a constructor.
var Cat = function(name) {
    this.name = name
};
console.log(Cat.prototype); // Cat {}

// Object do not have a prototype property. But they do have a --proto-- property.
// An object prototype is the object instance from which the object is inherited.
var scaryCat = {name: 'scary'};
console.log(scaryCat.prototype); // undefined
console.log(scaryCat.__proto__); // {}

// All objects derived from a function share the same prototype instance
var fluffyCat = new Cat('fluffy');
console.log(fluffyCat.__proto__); // Cat {}
console.log(fluffyCat.__proto__ === Cat.prototype); // true

Cat.prototype.age = 3;
console.log(fluffyCat.age); // 3

//  When trying to access a property of an object, the property will not only be sought 
// on the object but on the prototype of the object, the prototype of the prototype, 
// and so on until either a property with a matching name is found or the end of the 
// prototype chain is reached.
var timidCat = new Cat('timid');
console.log(timidCat.age); // 3
timidCat.age = 5;
console.log(timidCat.age); // 5
console.log(timidCat.__proto__.age); // 3
console.log(fluffyCat.age); // 3







