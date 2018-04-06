import { Character, Skirmisher, Vanguard, Elementalist } from './Character';

export class Player{
  constructor(public name: string, public userName: string, public password: string){}
  characters: Character[];
}
