class Animal {
  constructor(name) {
    this.name = name;
    console.log("Animal Created:", name);
  }
  eat() {
    console.log("Can Eat");
  }
  jump() {
    console.log("Can Jump");
  }
}

class Lion extends Animal {
  constructor(name) {
    super(name); // The super keyword is used to call the constructor of its parent class to access the parent's properties and methods
    console.log("Lion Created:", name);
  }
  eat() {
    super.eat();
    console.log("Lion Eats Meat");
  }
}

let rabit = new Animal("Rabit");
rabit.eat();
let lion = new Lion("Lion");
lion.eat();
