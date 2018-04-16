'use strict'

// Creating a prototype chain
function Animal(voice){
    this.voice = voice || 'grunt';
}
Animal.prototype.speak = function(){
    console.log(this.voice);
};

function Cat(name){
    Animal.call(this, 'meow'); // step 1
    this.name = name;
}
Cat.prototype = Object.create(Animal.prototype); // step 2
Cat.prototype.constructor = Cat; // step 3

var lazyCat = new Cat('lazy');
lazyCat.speak(); // meow

// Much nicer when usig classes
class AnimalClass{
    constructor(voice){
        this.voice = voice || 'grunt';
    }
    speak(){
        console.log(this.voice);
    }
}

class CatClass extends AnimalClass{
    constructor(name){
        super('meow');
        this.name = name;
    }
}

var crazyCat = new CatClass('crazy');
crazyCat.speak(); // meow



