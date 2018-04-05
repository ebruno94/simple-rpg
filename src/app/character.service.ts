import { Injectable } from '@angular/core';
import { Character } from './models/Character';
import { Player } from './models/Player';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class CharacterService {
  playersObserve: FirebaseListObservable<any[]>
  players;

  constructor(private database: AngularFireDatabase) {
    this.playersObserve = database.list('players');
    this.playersObserve.subscribe(data=>{
      this.players = data;
      })
    }

  getPlayers(){
    return this.players;
  }

  getPlayerById(userId){
    let myPlayer = this.database.object('players/' + userId)
      return myPlayer;
    }
  }
