import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {
  @Output() childStartButton = new EventEmitter();

  childStartButtonClicked: boolean = false;

  childStartGame(){
    console.log("Child Start Game");
    this.childStartButtonClicked = true;
    this.childStartButton.emit();
  }
}
