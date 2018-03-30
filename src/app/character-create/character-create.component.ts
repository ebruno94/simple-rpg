import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Character, Vanguard, Skirmisher, Elementalist } from './../models/Character';

@Component({
  selector: 'app-character-create',
  templateUrl: './character-create.component.html',
  styleUrls: ['./character-create.component.css']
})
export class CharacterCreateComponent{
  @Output() sendCurrentCharacter = new EventEmitter();
  @Input() childStartButtonClicked: boolean;

  childCurrentCharacter: Character = null;

  createCharacter(name: string, charClass: string){
    let newCharacter: Character = null;
    if (charClass === "Vanguard"){
      newCharacter = new Vanguard(name);
    } else if (charClass === "Skirmisher"){
      newCharacter = new Skirmisher(name);
    } else if (charClass === "Elementalist"){
      newCharacter = new Elementalist(name);
    }

    this.childCurrentCharacter = newCharacter;
    this.sendCurrentCharacter.emit(newCharacter);
  }
}
