import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WelcomeComponent } from './welcome/welcome.component';
import { CharacterCreateComponent } from './character-create/character-create.component';
import { CharacterSelectComponent } from './character-select/character-select.component';
import { CharacterDisplayComponent } from './character-display/character-display.component';
import { SigninComponent } from './signin/signin.component';
import { RegisterComponent } from './register/register.component';

const appRoutes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },
  {
    path: 'signin',
    component: SigninComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'create/:playerId/:charId',
    component: CharacterCreateComponent
  },
  {
    path: 'select/:playerId',
    component: CharacterSelectComponent
  },
  {
    path: 'game/:id',
    component: CharacterDisplayComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
