import { Component, OnInit } from '@angular/core';
import { Player } from './../models/Player';
import { Character } from './../models/Character';

import { Router } from '@angular/router';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-character-select',
  templateUrl: './character-select.component.html',
  styleUrls: ['./character-select.component.css']
})
export class CharacterSelectComponent implements OnInit {
  players: FirebaseListObservable<any[]>;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  public charValue: any;
  currentPlayer: Player = new Player(this.players[0].name, this.players[0].username, this.players[0].password);

  goDisplayPage(selectedCharacter: Character){
    console.log(this.charValue);
    this.router.navigate(['game', this.charValue.id]);
  }
}
