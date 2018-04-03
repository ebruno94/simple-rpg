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


  logs: string[] = [];
  ifDead(){
    if(this.currentMonster.hp <= 0){
      this.childCurrentCharacter.setExp(this.currentMonster.killExp);
      this.childCurrentCharacter.items.push(this.currentMonster.item);
      this.setFighting.emit();
    }
  }

  charAttack(){
    this.childCurrentCharacter.attack(this.currentMonster);
    this.logs.push(`${this.childCurrentCharacter.name} attacked ${this.currentMonster.name} for ${Math.ceil(this.childCurrentCharacter.str * 1.5)} damage`);
  }

  monsterAttack(){
    this.currentMonster.attack(this.childCurrentCharacter);
    let damage: number = Math.ceil((this.currentMonster.attackDamage * (1.0 + (this.currentMonster.level / 10.0))) - (this.childCurrentCharacter.def * (0.8)));
    if (damage < 0){
      damage = 0;
    }
    this.logs.push(`${this.currentMonster.name} attacked ${this.childCurrentCharacter.name} for ${damage} damage`);
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
