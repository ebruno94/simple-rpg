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
}
