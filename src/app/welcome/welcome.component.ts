import { Component, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {
  constructor(private router: Router){}
  @Output() childStartButton = new EventEmitter();

  childStartButtonClicked: boolean = false;

  childStartGame(){
    this.childStartButtonClicked = true;
    this.childStartButton.emit();
  }

  goToSignIn(){
    this.router.navigate(['signin']);
  }
}
