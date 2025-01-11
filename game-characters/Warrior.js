import Character from "./Character.js";
import Mage from "./Mage.js";
import Thief from "./Thief.js";

export default class Warrior extends Character {
  constructor(name, healAmount) {
    super(name, 100, 9, 10);
    this.healAmount = healAmount;
  }

  attack(target) {
    if (target instanceof Mage) {
      target.health -= (this.strength - target.defense) * 2;
      this.heal();
    } else if (target instanceof Thief) {
      target.health -= (this.strength - 7) * 2;
      this.heal();
    } else if (target instanceof Warrior) {
      target.health -= this.strength + 1;
      this.heal();
    }
  }

  heal() {
    if (Math.floor(Math.random() < 0.5) * 2 < 2) {
      this.health += Math.floor(Math.random()) + this.healAmount;
      console.log("The Warrior healed himself!");
    }
  }
}
