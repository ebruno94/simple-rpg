import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Character } from './../models/Character';

@Component({
  selector: 'app-character-display',
  templateUrl: './character-display.component.html',
  styleUrls: ['./character-display.component.css']
})
export class CharacterDisplayComponent  {
  @Input() childCurrentCharacter: Character = null;
  @Output() childInitiateFight = new EventEmitter();

  initiateFight(){
    this.childInitiateFight.emit();
  }
}
