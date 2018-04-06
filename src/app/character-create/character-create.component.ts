import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Character, Vanguard, Skirmisher, Elementalist, Filler } from './../models/Character';
import { Router } from '@angular/router';
import { FirebaseListObservable } from 'angularfire2/database';
import { FirebaseObjectObservable } from 'angularfire2/database';
import { PlayerService } from '../player.service';
import { CharacterService } from '../character.service';

import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common'

@Component({
  selector: 'app-character-create',
  templateUrl: './character-create.component.html',
  styleUrls: ['./character-create.component.css'],
  providers: [ PlayerService, CharacterService ]
})
export class CharacterCreateComponent{
  @Output() sendCurrentCharacter = new EventEmitter();
  @Input() childStartButtonClicked: boolean;

  childCurrentCharacter: Character = null;
  player;
  playerId;
  charId;
  currentCharacter;

  constructor(private route: ActivatedRoute, private location: Location, private router: Router, private playerService: PlayerService, private characterService: CharacterService){}
  ngOnInit(){
    this.route.params.forEach((urlParametersArray)=>{
      this.playerId = urlParametersArray['playerId'];
      this.charId = urlParametersArray['charId'];
    });
    this.playerService.players.subscribe(data=>{
      for(let somePlayer of data){
        if(somePlayer.name === this.playerId){
          this.player = somePlayer;
        }
      }

      for (let someCharacter of this.player.characters){
        if (parseInt(someCharacter.id) === parseInt(this.charId)){
          this.currentCharacter = someCharacter;
        }
      }
    });
  }

  createCharacter(name: string, charClass: string){
    let newCharacter: Character = null;
    if (charClass === "Vanguard"){
      newCharacter = new Vanguard(name, this.charId);
    } else if (charClass === "Skirmisher"){
      newCharacter = new Skirmisher(name, this.charId);
    } else if (charClass === "Elementalist"){
      newCharacter = new Elementalist(name, this.charId);
    }

    this.childCurrentCharacter = newCharacter;
    this.playerService.addCharacter(newCharacter, this.player, this.charId);
    this.sendCurrentCharacter.emit(newCharacter);
  }

  goToSelect(){
    this.router.navigate(['select', this.playerId]);
  }
}
