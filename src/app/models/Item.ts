export class Item{
  constructor(public name: string, public stat: string, public modifier: number){}

  useItem(target){
    target[this.stat] += this.modifier;
    console.log(`${this.name} has been used`);
  }
}

export let itemsLibrary = {
  smHPPot: function(){ return new Item("Small Health Potion", "hp", 25); },
  mdHPPot: function(){ return new Item("Medium Health Potion", "hp", 50); },
  lgHPPot: function(){ return new Item("Large Health Potion", "hp", 100); },
  smMPPot: function(){ return new Item("Small Mana Potion", "mp", 25); },
  mdMPPot: function(){ return new Item("Medium Mana Potion", "mp", 50); },
  lgMPPot: function(){ return new Item("Large Mana Potion", "mp", 100); },
  strPot: function(){ return new Item("Strength Potion", "str", 10) },
  intPot: function(){ return new Item("Intelligence Potion", "int", 10) },
  dexPot: function(){ return new Item("Dexterity Potion", "dex", 10) },
}

export function createKeyArray(){
  let tempArray = [];
  for (let key in itemsLibrary){
    tempArray.push(key);
  }
  return tempArray;
}

export let itemList: Item[];
