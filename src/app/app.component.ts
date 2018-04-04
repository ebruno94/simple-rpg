import { Component } from '@angular/core';
import { Character, Vanguard, Skirmisher, Elementalist } from './models/Character';
import { itemList } from './models/Item';
import { Monster, monsterFactory } from './models/Monster';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentCharacter: Character = null;
  currentMonster: Monster = null;
  isFighting: boolean = false;

  setCurrentCharacter(newCharacter: Character){
    this.currentCharacter = newCharacter;
  }

  setCurrentMonster(){
    let randy = Math.floor(Math.random() * this.currentCharacter.level);
    this.currentMonster = monsterFactory[randy]();
  }


  setFighting(){
    this.isFighting = !this.isFighting;
  }

}
