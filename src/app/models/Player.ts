import { Character, Skirmisher, Vanguard, Elementalist, Filler } from './Character';

export class Player{
  constructor(public name: string, public userName: string, public password: string){}
  characters: Character[] = [new Filler("---", Math.floor(Math.random() * 1000)), new Filler("---", Math.floor(Math.random() * 1000)), new Filler("---", Math.floor(Math.random() * 1000))];
}
