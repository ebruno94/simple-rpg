import { Component, OnInit } from '@angular/core';
import { Player } from './../models/Player';

@Component({
  selector: 'app-character-select',
  templateUrl: './character-select.component.html',
  styleUrls: ['./character-select.component.css']
})
export class CharacterSelectComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  currentPlayer: Player = new Player("Ernest", "ernnex", "ernnex");

}
