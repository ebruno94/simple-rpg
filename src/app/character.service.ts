import { Injectable } from '@angular/core';
import { Character } from './models/Character';
import { Player } from './models/Player';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class CharacterService {
  players: FirebaseListObservable<any[]>
  constructor(private database: AngularFireDatabase) {
    this.players = database.list('players');
  }

  getChar(){
    return this.players;
  }
  getCharacterById(charId: number){}
}
