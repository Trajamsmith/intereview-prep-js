/**
 * Note that there's no elegant way to produce
 * a singleton in Javascript outside of a module,
 * because we need a variable outside of the class
 * definition to store the instance; modules allow
 * us to do this without polluting the global namespace
 */
let instance = null;

class President {
  constructor(name) {
    if (!instance) {
      this.name = name;
      instance = this;
    }

    return instance;
  }
}

const bill = new President("Bill Clinton");
console.log(bill);
const barack = new President("Barack Obama");
console.log(barack);

// Exporting the class as module
export default President;
