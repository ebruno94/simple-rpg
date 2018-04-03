import { Character } from './Character';
import { Monster } from './Monster';

export let abilitiesLibrary = {
  // Universal Skills
  heal: {
    name: "Heal",
    mpCost: 15,
    cast: function(character: Character, monster: Monster){
      character.hp += Math.ceil(character.int * 1.5);
      character.mp -= 15;
    }
  },

  block: {
    name: "Block",
    mpCost: 0,
    cast: function(character: Character, monster: Monster){
      character.hp -= 5;
    }
  },

  // Vanguard Skills
  shieldBash: {
    name: "Shield Bash",
    mpCost: 25,
    cast: function(character: Character, monster: Monster){
      monster.hp -= Math.ceil(character.str * 1.5) - monster.def;
      character.mp -= 25;
    }
  },

  // Skirmisher Skills
  poisonSlash: {
    name: "Poison Slash",
    mpCost: 25,
    cast: function(character: Character, monster: Monster){
      monster.hp -= Math.ceil(character.dex * 1.5) - monster.def;
      character.mp -= 25;
    }
  },

  // Elementalist Skills
  soulBeat: {
    name: "Soul Beat",
    mpCost: 25,
    cast: function(character: Character, monster: Monster){
      monster.hp -= Math.ceil(character.int * 1.5) - monster.def;
      character.mp -= 25;
    }
  }
}
