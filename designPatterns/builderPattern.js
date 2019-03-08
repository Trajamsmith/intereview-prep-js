/**
 * --NOT MY WORK--
 * Work through this independently, but
 * here's a reference
 */
class Raptor {
  constructor(build) {
    this.specimenId = build.specimenId;
    this.speed = build.speed;
    this.plumage = build.plumage;
  }

  static get Builder() {
    class Builder {
      constructor(specimenId) {
        this.specimenId = specimenId;
      }
      withSpeed(speed) {
        this.speed = speed;
        return this;
      }
      withPlumage(plumage) {
        this.plumage = plumage;
        return this;
      }
      build() {
        return new Raptor(this);
      }
    }
    return Builder;
  }
}

let raptor3 = new Raptor.Builder("88C")
  .withSpeed(45)
  .withPlumage("heavy")
  .build();

console.log(raptor3);
