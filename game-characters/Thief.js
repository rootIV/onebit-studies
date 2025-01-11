import Character from "./Character.js";
import Warrior from "./Warrior.js";
import Mage from "./Mage.js";

export default class Thief extends Character {
  constructor(name, agility) {
    super(name, 100, 12, 5);
    this.agility = agility;
  }

  attack(target) {
    if (target instanceof Mage) {
      this.critical(target, this.agility, (this.strength - target.defense) * 2);
    } else if (target instanceof Thief) {
      this.critical(target, this.agility, (this.strength - 7) * 2);
    } else if (target instanceof Warrior) {
      this.critical(target, this.agility, (this.strength - target.defense) * 5);
    }
  }

  critical(target, agility, calculus) {
    if (Math.floor(Math.random() * agility) < 1) {
      target.health -= calculus + 2;
      console.log("The Thief landed a critical hit!");
    } else {
      target.health -= calculus;
    }
  }
}
