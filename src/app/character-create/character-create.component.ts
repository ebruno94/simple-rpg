import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Character, Vanguard, Skirmisher, Elementalist } from './../models/Character';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-character-create',
  templateUrl: './character-create.component.html',
  styleUrls: ['./character-create.component.css']
})
export class CharacterCreateComponent implements OnInit{
  @Output() sendCurrentCharacter = new EventEmitter();
  @Input() childStartButtonClicked: boolean;

  childCurrentCharacter: Character = null;

  userId;

  constructor(private route: ActivatedRoute, private location: Location,
  private router: Router){}
  ngOnInit(){
    this.route.params.forEach((urlParams)=> {
      this.userId = urlParams['userId'];
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
    this.sendCurrentCharacter.emit(newCharacter);
  }

  backToSelect(){
    this.router.navigate(['select', this.userId])
  }
}
