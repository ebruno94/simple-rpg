import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Character, Vanguard, Skirmisher, Elementalist } from './../models/Character';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { CharacterService } from './../character.service';

@Component({
  selector: 'app-character-create',
  templateUrl: './character-create.component.html',
  styleUrls: ['./character-create.component.css'],
  providers: [ CharacterService ]
})
export class CharacterCreateComponent implements OnInit{
  @Output() sendCurrentCharacter = new EventEmitter();
  @Input() childStartButtonClicked: boolean;

  childCurrentCharacter: Character = null;

  userId;
  charId;

  constructor(private route: ActivatedRoute, private location: Location,
  private router: Router, private characterService: CharacterService){}
  ngOnInit(){
    this.route.params.forEach((urlParams)=> {
      this.userId = urlParams['userId'];
      this.charId = urlParams['charId'];
      console.log("charId is initially set to" + this.charId);
    })
  }

  createCharacter(name: string, id: number, charClass: string){
    let newCharacter: Character = null;
    if (charClass === "Vanguard"){
      newCharacter = new Vanguard(name, id);
    } else if (charClass === "Skirmisher"){
      newCharacter = new Skirmisher(name, id);
    } else if (charClass === "Elementalist"){
      newCharacter = new Elementalist(name, id);
    }

    this.childCurrentCharacter = newCharacter;
    console.log("this is charId before being passed: " + this.charId);
    this.characterService.addCharacter(newCharacter, this.charId, this.userId);
    this.sendCurrentCharacter.emit(newCharacter);
    // this.router.navigate(['select', this.userId])
  }

  backToSelect(){
    this.router.navigate(['select', this.userId])
  }
}
