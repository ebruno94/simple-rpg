import { Injectable } from '@angular/core';
import { Player } from './models/Player';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { firebaseConfig } from './app.module';

@Injectable()
export class PlayerService {
  players: FirebaseListObservable<any[]>
  characters: FirebaseListObservable<any[]>
  constructor(private database: AngularFireDatabase) {
    this.players = database.list('players');
    this.characters= database.list('players');
  }

  addPlayer(newPlayer: Player){
    this.players.push(newPlayer);
  }


}
