//@ts-check

class Cheese {
    constructor(type) {
        this.type = type;
        this.color = "yellow";
        this.age = 0;
        this.cost = 0.0;
    }
    eat() {
        console.log(`Nom Nom Nom ${this.type} is yummy!`);
    }
}

let cheddar = new Cheese("Cheddar");
cheddar.color = "orange";
let swiss = new Cheese("Swiss");
swiss.color = "white";

cheddar.eat();
swiss.eat();