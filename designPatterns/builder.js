// Basic object constructor
// const Raptor = (color, speed) => {
//   const state = {
//     color,
//     speed
//   };
//   return state;
// };

// const owl = Raptor("blue", "45mph");
// console.log(owl);

// Builder 1
class Raptor {
  constructor(specs) {
    this.type = specs.type;
    this.speed = specs.speed;
    this.color = specs.color;
  }

  static get Builder() {
    class Builder {
      constructor(type) {
        this.type = type;
      }

      addSpeed(speed) {
        this.speed = speed;
        return this;
      }

      addColor(color) {
        this.color = color;
        return this;
      }

      build() {
        return new Raptor(this);
      }
    }

    return Builder;
  }
}

const owl = new Raptor.Builder("Owl")
  .addSpeed("40mph")
  .addColor("black")
  .build();
console.log(owl);
