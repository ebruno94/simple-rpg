import { Component, OnInit } from '@angular/core';
import { Player } from './../models/Player';
import { Character } from './../models/Character';

@Component({
  selector: 'app-character-select',
  templateUrl: './character-select.component.html',
  styleUrls: ['./character-select.component.css']
})
export class CharacterSelectComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  selectedCharacter: Character;
  currentPlayer: Player = new Player("Ernest", "ernnex", "ernnex");

  setCharacter(char){
    this.selectedCharacter = char;
  }
}
