import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Character } from './../models/Character';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-character-display',
  templateUrl: './character-display.component.html',
  styleUrls: ['./character-display.component.css']
})
export class CharacterDisplayComponent implements OnInit {

  charId: number;
  constructor(private route: ActivatedRoute, private location: Location){}

  ngOnInit(){
    this.route.params.forEach((urlParameters) => {
      this.charId = parseInt(urlParameters['id']);
    })
  }
  @Input() childCurrentCharacter: Character = null;
  @Output() childInitiateFight = new EventEmitter();

  initiateFight(){
    this.childInitiateFight.emit();
  }
}
