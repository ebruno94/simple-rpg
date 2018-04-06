import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlayerService } from '../player.service';
import { Player } from '../models/Player';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [PlayerService]
})
export class RegisterComponent implements OnInit {

  constructor(private router: Router, private playerService: PlayerService) { }

  ngOnInit() {
  }

  goToSignIn(){
    this.router.navigate(['signin']);
  }

  register(name, user, pass1, pass2){
    if (this.verify(pass1, pass2)){
      let newPlayer = new Player(name, user, pass1);
      this.playerService.addPlayer(newPlayer);
      this.goToSignIn();
    } else {
      alert("Your passwords do not match! Try again!");
    }
  }

  verify(pass1, pass2){
    if (pass1 === pass2){
      return true;
    }else{
        return false;
    }
  }
}
