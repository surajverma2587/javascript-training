import BasePowers from "./BasePowers.js";

class ExtendedPowers extends BasePowers {
  constructor(powers, extendedPowers) {
    super(powers);
    this.flight = extendedPowers.flight;
    this.special = extendedPowers.special;
  }
}

export default ExtendedPowers;
