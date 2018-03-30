import { Item, itemsLibrary } from './Item';
import { abilitiesLibrary } from './AbilityLibrary';

export class Character{
  constructor(public name: string, public charClass: string, public hp: number, public maxHp: number, public mp: number, public maxMp: number, public str: number, public int: number, public dex: number, public luck: number, public def: number){}
  level: number = 1;
  exp: number = 0;
  maxExp: number = 100;

  items: Item[] = [itemsLibrary.smHPPot(), itemsLibrary.smMPPot()];
  abilities = [];

  useItem(myItem, index){
    myItem.useItem(this);
    this.items.splice(index, 1);
  }

  levelUp(){
    console.log("Character LEVEL UP!");
    this.level += 1;
    this.maxHp = Math.ceil(this.maxHp * 1.3);
    this.hp = this.maxHp;
    this.maxMp = Math.ceil(this.maxMp * 1.3);
    this.mp = this.maxMp;
    this.str = Math.ceil(this.str * 1.3);
    this.int = Math.ceil(this.int * 1.3);
    this.dex = Math.ceil(this.dex * 1.3);
    this.luck= Math.ceil(this.luck * 1.3);
    this.def = Math.ceil(this.def * 1.3);
    this.maxExp = Math.ceil(this.maxExp * 1.5);
  }

  setExp(tempExp){
    this.exp += tempExp;
    if (this.exp >= this.maxExp){
      this.levelUp();
    }
  }

  attack(target){
    let damage = Math.ceil(this.str * 1.5)
    target.hp -= damage;
    console.log(`${target.name} attacked for ${damage}`)
  }
}

// CLASSES -- Character classes

export class Skirmisher extends Character{
  constructor(name){
    super(name, "Skirmisher", 100, 100, 75, 75, 7, 6, 10, 5, 5);
    this.abilities = [abilitiesLibrary.heal, abilitiesLibrary.block, abilitiesLibrary.poisonSlash];
  }
}

export class Vanguard extends Character{
  constructor(name){
    super(name, "Vanguard", 150, 150, 50, 50, 10, 5, 7, 6, 8);
    this.abilities = [abilitiesLibrary.heal, abilitiesLibrary.block, abilitiesLibrary.shieldBash];
  }
}

export class Elementalist extends Character{
  constructor(name){
    super(name, "Elementalist", 125, 125, 100, 100, 5, 10, 7, 6, 6);
    this.abilities = [abilitiesLibrary.heal, abilitiesLibrary.block, abilitiesLibrary.soulBeat];
  }
}
