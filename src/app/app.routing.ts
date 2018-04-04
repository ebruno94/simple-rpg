import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WelcomeComponent } from './welcome/welcome.component';
import { CharacterCreateComponent } from './character-create/character-create.component';

const appRoutes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },
  {
    path: 'create',
    component: CharacterCreateComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
