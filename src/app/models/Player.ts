import { Character } from './Character';

export class Player{
  constructor(public name: string, public userName: string, public password: string, public id: number){}
  characters: Character[];
}
