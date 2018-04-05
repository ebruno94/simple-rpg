import { Component, OnInit } from '@angular/core';
import { Player } from './../models/Player';
import { Character } from './../models/Character';

import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { FirebaseObjectObservable } from 'angularfire2/database';
import { FirebaseListObservable } from 'angularfire2/database';
import { CharacterService } from './../character.service';

@Component({
  selector: 'app-character-select',
  templateUrl: './character-select.component.html',
  styleUrls: ['./character-select.component.css'],
  providers: [ CharacterService ]
})
export class CharacterSelectComponent implements OnInit {
  constructor(private route: ActivatedRoute, private location: Location, private router: Router, private characterService : CharacterService) { }

  ngOnInit() {
    this.route.params.forEach((urlParametersArray) => {
      this.playerUserId = urlParametersArray['userId'];
    });
    this.playerObserve = this.characterService.getPlayerById(this.playerUserId);
  }


  playerUserId;
  public charValue: any;
  playerObserve: FirebaseObjectObservable<any>;

  checkLog(){
    console.log(`UserID: ${this.playerUserId}`)
    console.log(`Player Observe: ${this.playerObserve}`);
  }

  goCreateChar(userId, charId){
    this.router.navigate(['create', userId, charId]);
  }

  goDisplayPage(selectedCharacter: Character){
    console.log(this.charValue);
    this.router.navigate(['game', this.charValue.id]);
  }
}
