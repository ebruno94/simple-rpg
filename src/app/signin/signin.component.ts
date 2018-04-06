import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlayerService } from '../player.service';
import { Player } from '../models/Player';
import { FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { CharacterService } from '../character.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
  providers: [PlayerService, CharacterService]
})
export class SigninComponent implements OnInit {

  constructor(private router: Router, private playerService: PlayerService, private characterService: CharacterService) {}

  currentPlayer: FirebaseObjectObservable<any>;
  ngOnInit() {
  }

  // login(user, pass){
  //   // playerKey =
  //   this.playerService.verify(user, pass);
  //   // this.router.navigate(['select', playerKey]);
  // }

  goToRegister(){
    this.router.navigate(['register']);
  }

  playAsGuest(){
    let randomId = Math.floor(Math.random() * 1000000);
    let newPlayer = new Player("guest" + randomId, "null", "null");
    this.playerService.addPlayer(newPlayer);
    this.routeToSelect();
  }

  routeToSelect(){
    this.playerService.recentlyAddedPlayer.subscribe(
      data=>{
        this.router.navigate(['select', data.$key]);
      }
    )
  }

}
