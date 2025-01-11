import Mage from "./Mage.js";
import Thief from "./Thief.js";
import Warrior from "./Warrior.js";

const mage = new Mage("Mage", 1);
const thief = new Thief("Thief", 2);
const warrior = new Warrior("Warrior", 3);

mage.attack(thief);
mage.attack(warrior);
thief.attack(warrior);
thief.attack(mage);
warrior.attack(mage);
warrior.attack(thief);

console.table({ mage, thief, warrior });
