import { Item, itemsLibrary } from './Item';
import { abilitiesLibrary } from './AbilityLibrary';

export class Character{
  constructor(public name: string, public charClass: string, public hp: number, public maxHp: number, public mp: number, public maxMp: number, public str: number, public int: number, public dex: number, public luck: number, public def: number, public img: string){}
  level: number = 1;
  exp: number = 0;
  maxExp: number = 100;

  items: Item[] = [itemsLibrary.smHPPot(), itemsLibrary.smMPPot()];
  abilities = [];

  useItem(myItem, index){
    myItem.useItem(this);
    this.items.splice(index, 1);
    if (this.hp > this.maxHp){
      this.hp = this.maxHp;
    }
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
    this.exp = 0;
    this.maxExp = Math.ceil(this.maxExp * 1.5);
  }

  setExp(tempExp){
    this.exp += tempExp;
    if (this.exp >= this.maxExp){
      this.levelUp();
    }
  }

  attack(target){
    let damage = Math.ceil(this.str * 1.5);
    if (damage < 0){
      damage = 0;
    }
    target.hp -= damage;
    console.log(`${target.name} attacked for ${damage}`)
  }
}

// CLASSES -- Character classes

export class Skirmisher extends Character{
  constructor(name){
    super(name, "Skirmisher", 100, 100, 75, 75, 7, 6, 10, 5, 5, 'https://img00.deviantart.net/2230/i/2017/035/0/8/dailyknight_8_by_rotaken-daxuj42.png');
    this.abilities = [abilitiesLibrary.heal, abilitiesLibrary.block, abilitiesLibrary.poisonSlash];
  }
}

export class Vanguard extends Character{
  constructor(name){
    super(name, "Vanguard", 150, 150, 50, 50, 10, 5, 7, 6, 8, 'https://pre00.deviantart.net/176d/th/pre/f/2016/002/3/9/demonknight_by_rotaken-d9mi82y.png');
    this.abilities = [abilitiesLibrary.heal, abilitiesLibrary.block, abilitiesLibrary.shieldBash];
  }
}

export class Elementalist extends Character{
  constructor(name){
    super(name, "Elementalist", 125, 125, 100, 100, 5, 10, 7, 6, 6, 'https://pre00.deviantart.net/9e44/th/pre/f/2015/239/2/2/shroomlock_by_rotaken-d97dc0u.png');
    this.abilities = [abilitiesLibrary.heal, abilitiesLibrary.block, abilitiesLibrary.soulBeat];
  }
}
