export class Item{
  constructor(public name: string, public stat: string, public modifier: number, public imgUrlIcon: string, public imgUrlBig: string){}

  useItem(target){
    target[this.stat] += this.modifier;
    console.log(`${this.name} has been used`);
  }
}

export let itemsLibrary = {
  smHPPot: function(){ return new Item("Health Vial", "hp", 25, "../../assets/img/potion/hpviSM.png", "../../assets/img/potion/hpviBIG.png"); },
  mdHPPot: function(){ return new Item("Health Flask", "hp", 50, "../../assets/img/potion/hpflSM.png", "../../assets/img/potion/hpflBIG.png"); },
  smMPPot: function(){ return new Item("Mana Vial", "mp", 25, "../../assets/img/potion/mpviSM.png", "../../assets/img/potion/mpviBIG.png"); },
  mdMPPot: function(){ return new Item("Mana Flask", "mp", 50, "../../assets/img/potion/mpflSM.png", "../../assets/img/potion/mpflBIG.png"); },
  strPot: function(){ return new Item("Strength Potion", "str", 10, "../../assets/img/potion/strSM.png", "../../assets/img/potion/strBIG.png") },
  intPot: function(){ return new Item("Intelligence Potion", "int", 10, "../../assets/img/potion/intSM.png", "../../assets/img/potion/intBIG.png") },
  dexPot: function(){ return new Item("Dexterity Potion", "dex", 10, "../../assets/img/potion/dexSM.png", "../../assets/img/potion/dexBIG.png") },
}

export function createKeyArray(){
  let tempArray = [];
  for (let key in itemsLibrary){
    tempArray.push(key);
  }
  return tempArray;
}

export let itemList: Item[];
