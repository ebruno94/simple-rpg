import { Injectable } from '@angular/core';
import { Player } from './models/Player';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { firebaseConfig } from './app.module';

@Injectable()
export class PlayerService {
  players: FirebaseListObservable<any[]>
  characters: FirebaseListObservable<any[]>
  recentlyAddedPlayer;
  currentPlayer;
  constructor(private database: AngularFireDatabase) {
    this.players = database.list('players');
    this.characters= database.list('players/characters');
  }

  addPlayer(newPlayer){
    this.players.push(newPlayer);
    this.recentlyAddedPlayer = this.database.object('/players/' + newPlayer.name);
    console.log(this.players);
    this.players.subscribe(data=>{
      console.log(data);
    });
    this.recentlyAddedPlayer.subscribe(data => {
      this.currentPlayer = data;
      console.log(data);
    });
  }


  getPlayerByKey(key){
    return this.database.object('/players/' + key);
  }

}
