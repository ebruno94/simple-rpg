import { Component } from '@angular/core';
import { Character, Vanguard, Skirmisher, Elementalist } from './models/Character';
import { itemList } from './models/Item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  startClicked: boolean = false;
  currentCharacter: Character = null;
  isFighting: boolean = false;

  setCurrentCharacter(newCharacter: Character){
    this.currentCharacter = newCharacter;
    this.startClicked = false;
  }

  setFighting(){
    this.isFighting = !this.isFighting;
  }

  startGame(){
    this.startClicked = true;;
  }
}
