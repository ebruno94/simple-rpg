import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WelcomeComponent } from './welcome/welcome.component';
import { CharacterCreateComponent } from './character-create/character-create.component';
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
    path: 'display',
    component: CharacterDisplayComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
