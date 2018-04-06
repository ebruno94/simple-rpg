import { Injectable } from '@angular/core';
import { Player } from './models/Player';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { firebaseConfig } from './app.module';

@Injectable()
export class PlayerService {
  players: FirebaseListObservable<any[]>
  characters: FirebaseListObservable<any[]>
  recentlyAddedPlayer;
  constructor(private database: AngularFireDatabase) {
    this.players = database.list('players');
    this.characters= database.list('players/characters');
  }

  addPlayer(newPlayer: Player){
    this.players.push(newPlayer);
    this.recentlyAddedPlayer = this.database.object('players/' + newPlayer.name);
    this.recentlyAddedPlayer.subscribe(data => {
      console.log(data);
    });
  }


  getPlayerByKey(key){
    return this.database.object('players/' + key);
  }

}
