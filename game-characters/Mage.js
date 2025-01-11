import Character from "./Character.js";
import Thief from "./Thief.js";
import Warrior from "./Warrior.js";

export default class Mage extends Character {
  constructor(name, defenseSpell) {
    super(name, 100, 10, 7);
    this.defenseSpell = defenseSpell;
  }

  attack(target) {
    if (target instanceof Mage) {
      target.health -= (this.strength / 2) * 2;
      this.spell(target);
    } else if (target instanceof Thief) {
      target.health -= (this.strength - target.defense) * 2;
      this.spell(target);
    } else if (target instanceof Warrior) {
      target.health -= this.strength;
      this.spell(target);
    }
  }

  spell(target) {
    if (Math.floor(Math.random() < 0.5) * 2 < 2) {
      target.health -= this.defenseSpell;
      console.log("The Mage cast a spell on the target!");
    }
  }
}
