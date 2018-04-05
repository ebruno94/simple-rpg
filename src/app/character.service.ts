import { Injectable } from '@angular/core';
import { Character } from './models/Character';
import { Player } from './models/Player';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class CharacterService {
  playersObserve: FirebaseListObservable<any[]>
  players = [];
  charactersObserve: FirebaseListObservable<any[]>

  constructor(private database: AngularFireDatabase) {
    this.playersObserve = database.list('players');
    this.charactersObserve = database.list('characters');
    this.playersObserve.subscribe(data=>{
      this.players = [];
      data.forEach(player=>{
        this.players.push({
          username: player.username,
          password: player.password,
          characters: player.characters,
          name: player.name,
          key: player.$key
        });
        console.log("last added player object: " + this.players[this.players.length-1]);
        console.log("last added player key: " + this.players[this.players.length-1].key);
        console.log(this.players.length);
        console.log(this.players[0].characters.length);
      })
      })
    }

  getPlayers(){
    return this.players;
  }

  addCharacter(newChar: Character, charId, userId){
    let playerToUpdate = this.getPlayerById(userId);
    playerToUpdate.subscribe(data=>{
      console.log("this is the passed charId: " + charId);
      console.log(data);
      console.log(data.characters[charId].name);
      data.update({characters: [
        '1': {
        name: newChar.name,
        id: newChar.id,
        charClass: newChar.charClass,
        img: newChar.img
        }
      ]

    });
      console.log("data was updated");
  });
}

  getCharacterByKey(key, userId){
    let myCharacter = this.database.object('players/' + userId + '/characters/' + key)
    return myCharacter;
  }

  getPlayerById(userId){
    let myPlayer = this.database.object('players/' + userId)
      return myPlayer;
    }
  }
