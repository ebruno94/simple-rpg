import { Component, OnInit } from '@angular/core';
import { Player } from './../models/Player';
import { Character } from './../models/Character';

import { Router } from '@angular/router'

@Component({
  selector: 'app-character-select',
  templateUrl: './character-select.component.html',
  styleUrls: ['./character-select.component.css']
})
export class CharacterSelectComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  public charValue: any;
  currentPlayer: Player = new Player("Ernest", "ernnex", "ernnex");

  goDisplayPage(selectedCharacter: Character){
    console.log(this.charValue);
    this.router.navigate(['game', this.charValue.id]);
  }
}
