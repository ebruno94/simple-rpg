import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WelcomeComponent } from './welcome/welcome.component';
import { CharacterCreateComponent } from './character-create/character-create.component';
import { CharacterSelectComponent } from './character-select/character-select.component';
import { CharacterDisplayComponent } from './character-display/character-display.component';

const appRoutes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },
  {
    path: 'create/:userId/:charId',
    component: CharacterCreateComponent
  },
  {
    path: 'select/:userId',
    component: CharacterSelectComponent
  },
  {
    path: 'game/:id',
    component: CharacterDisplayComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
