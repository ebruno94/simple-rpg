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
    path: 'create',
    component: CharacterCreateComponent
  },
  {
    path: 'select',
    component: CharacterSelectComponent
  },
  {
    path: 'game',
    component: CharacterDisplayComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
