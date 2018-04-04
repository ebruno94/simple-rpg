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

  createCharacter(name: string, id: number, charClass: string){
    let newCharacter: Character = null;
    if (charClass === "Vanguard"){
      newCharacter = new Vanguard(name, id);
    } else if (charClass === "Skirmisher"){
      newCharacter = new Skirmisher(name, id);
    } else if (charClass === "Elementalist"){
      newCharacter = new Elementalist(name, id);
    }

    this.childCurrentCharacter = newCharacter;
    this.sendCurrentCharacter.emit(newCharacter);
  }
}
