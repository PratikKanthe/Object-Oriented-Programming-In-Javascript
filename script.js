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

class Car {
  construcor(color) {
    this.color = color;
    console.log("Car Created:", color);
  }
  eat(fuel) {
    this.fuel = fuel;
    console.log("Car Eats:", fuel);
  }
}

let c1 = new Car("red");
c1.eat("Deisel");

let c2 = new Car("black");
c2.eat("Petrol");

class NewCar extends Car {
  constructor(color) {
    super(color);
    console.log("C3 Created:", color);
  }
  eat(fuel) {
    console.log("Car Eats:", fuel);
  }
}

let c3 = new NewCar("white");
c3.eat("CNG");
