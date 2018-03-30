import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-battle-seq',
  templateUrl: './battle-seq.component.html',
  styleUrls: ['./battle-seq.component.css']
})
export class BattleSeqComponent {
  @Input() childIsFighting: boolean = false;

}
