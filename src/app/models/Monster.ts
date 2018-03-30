import { Item, itemsLibrary, createKeyArray } from './Item';
import { Character } from './Character';

export class Monster{
  item;

  constructor(public name: string, public level: number, public hp: number, public maxHp: number, public attackDamage: number, public def: number, public killExp: number){
    this.item = (function(){
      let randomNumber = Math.floor(Math.random() * Object.keys(itemsLibrary).length);
      let keyArray = createKeyArray();
      console.log(keyArray);
      return itemsLibrary[keyArray[randomNumber]];
    })
  }

  attack(target: Character){
    let damage = Math.ceil((this.attackDamage * (1.0 + (this.level / 10.0))) - (target.def * (0.8)));
    target.hp -= damage;
    console.log(`${this.name} attacked ${target.name} for ${damage}`);
  }
}

export let monsterFactory = [
  function(){
    return new Monster("Slime", 1, 25, 25, 5, 0, 20);
  },
  function(){
    return new Monster("Zombie", 2, 50, 50, 15, 5, 50);
  },
  function(){
    return new Monster("Troll", 3, 100, 100, 20, 20, 80);
  },
  function(){
    return new Monster("Orc", 4, 125, 125, 30, 25, 110);
  },
  function(){
    return new Monster("Evil Elf", 5, 200, 200, 50, 50, 150);
  }
]
