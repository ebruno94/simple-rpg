import { Component, OnInit } from '@angular/core';
import { Player } from './../models/Player';
import { Character } from './../models/Character';

import { Router } from '@angular/router';
import { FirebaseListObservable } from 'angularfire2/database';
import { FirebaseObjectObservable } from 'angularfire2/database';
import { PlayerService } from '../player.service';

import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common'

@Component({
  selector: 'app-character-select',
  templateUrl: './character-select.component.html',
  styleUrls: ['./character-select.component.css'],
  providers: [PlayerService]
})
export class CharacterSelectComponent implements OnInit {
  players: FirebaseListObservable<any[]>;
  currentPlayer: FirebaseObjectObservable<any>;
  playerId;

  constructor(private route: ActivatedRoute, private location: Location, private router: Router, private playerService: PlayerService) {  }

  ngOnInit() {
    this.route.params.forEach((urlParametersArray)=> {
      this.playerId = urlParametersArray['playerId'];
    });
    this.currentPlayer = this.playerService.getPlayerByKey(this.playerId);
  }

  public charValue: any;

  goDisplayPage(selectedCharacter: Character){
    console.log(this.charValue);
    this.router.navigate(['game', this.charValue.id]);
  }

  checkLog(){
  }
}
