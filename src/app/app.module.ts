import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CharacterCreateComponent } from './character-create/character-create.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { CharacterDisplayComponent } from './character-display/character-display.component';

@NgModule({
  declarations: [
    AppComponent,
    CharacterCreateComponent,
    WelcomeComponent,
    CharacterDisplayComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
