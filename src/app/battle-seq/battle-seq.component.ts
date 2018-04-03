import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Monster, monsterFactory } from './../models/Monster';
import { Character } from './../models/Character';

@Component({
  selector: 'app-battle-seq',
  templateUrl: './battle-seq.component.html',
  styleUrls: ['./battle-seq.component.css']
})
export class BattleSeqComponent {
  @Input() currentMonster: Monster = null;
  @Input() childCurrentCharacter: Character = null;
  @Output() setFighting = new EventEmitter();

  ifDead(){
    if(this.currentMonster.hp <= 0){
      this.childCurrentCharacter.setExp(this.currentMonster.killExp);
      this.childCurrentCharacter.items.push(this.currentMonster.item);
      this.setFighting.emit();
    }
  }

  initiateCombat(){
    this.childCurrentCharacter.attack(this.currentMonster);
    setTimeout(this.currentMonster.attack(this.childCurrentCharacter), 2000);
  }

  showItems(){
    let itemDiv = document.getElementById("itemList");
    let logDiv = document.getElementById("battleLogContainer");
    if (itemDiv.style.display === "none"){
      itemDiv.style.display = "block";
      logDiv.style.display = "none";
    } else {
      itemDiv.style.display = "none";
      logDiv.style.display = "block";
    }
  }

  hideItems(){
    document.getElementById("itemList").style.display = "none";
    document.getElementById("battleLogContainer").style.display = "none";
  }
}
