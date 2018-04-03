import { Item, itemsLibrary, createKeyArray } from './Item';
import { Character } from './Character';

export class Monster{
  item;

  constructor(public name: string, public level: number, public hp: number, public maxHp: number, public attackDamage: number, public def: number, public killExp: number, public img: string){
    this.item = (function(){
      let randomNumber = Math.floor(Math.random() * Object.keys(itemsLibrary).length);
      let keyArray = createKeyArray();
      return itemsLibrary[keyArray[randomNumber]]();
    })();
  }

  attack(target: Character){
    let damage = Math.ceil((this.attackDamage * (1.0 + (this.level / 10.0))) - (target.def * (0.8)));
    if (damage < 0){
      damage = 0;
    }
    target.hp -= damage;
    console.log(`${this.name} attacked ${target.name} for ${damage}`);
  }
}

export let monsterFactory = [
  function(){
    return new Monster("Slime", 1, 25, 25, 5, 0, 20, "../../assets/img/monster/slime.gif");
  },
  function(){
    return new Monster("Zombie", 2, 50, 50, 15, 5, 50, "../../assets/img/monster/zombie.gif");
  },
  function(){
    return new Monster("Troll", 3, 100, 100, 20, 20, 80, "../../assets/img/monster/troll.gif");
  },
  function(){
    return new Monster("Skeleton Warrior", 4, 125, 125, 30, 25, 110, "../../assets/img/monster/skeleton.gif");
  },
  function(){
    return new Monster("Demon", 5, 200, 200, 50, 50, 150, "../../assets/img/monster/demon.gif");
  }
]
