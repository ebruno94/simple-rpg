import { Injectable } from '@angular/core';
import { Player } from './models/Player';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { firebaseConfig } from './app.module';
import { Character } from './models/Character';

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

  addCharacter(newChar: Character, player, characterId){
    console.log(newChar);
    console.log(player.characters);
    console.log(characterId);
    console.log("Current Player is " + this.currentPlayer)
    let tempChar;
    for (let character of player.characters){
      if (parseInt(character.id) === parseInt(characterId)){
        tempChar = character;
      }
    }
    tempChar.update(newChar);
  }

}
