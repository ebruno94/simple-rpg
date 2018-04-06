import { Injectable } from '@angular/core';
import { Character, Filler } from './models/Character';
import { Player } from './models/Player';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class CharacterService {
  charactersObserve: FirebaseListObservable<any[]>

  constructor(private database: AngularFireDatabase) {
    this.charactersObserve = database.list('characters');
    }

  createCharacterSlots(){
    this.charactersObserve.push(new Filler("---", Math.floor(Math.random() * 1000)));
    this.charactersObserve.push(new Filler("---", Math.floor(Math.random() * 1000)));
    this.charactersObserve.push(new Filler("---", Math.floor(Math.random() * 1000)));
  }



}
