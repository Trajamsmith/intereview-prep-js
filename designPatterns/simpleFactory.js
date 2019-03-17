class Car {
  constructor(make, model) {
    this.model = model;
    this.make = make;
  }
}

class CarFactory {
  static makeChevy(model) {
    return new Car("Chevrolet", model);
  }
  static makeMazda(model) {
    return new Car("Chevrolet", model);
  }
}

const chevy = CarFactory.makeChevy("Silverado");
console.log(chevy);
