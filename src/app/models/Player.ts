import { Character, Skirmisher } from './Character';

export class Player{
  constructor(public name: string, public userName: string, public password: string){}
  characters: Character[] = [new Skirmisher("Nexticus"), null, null];
}
