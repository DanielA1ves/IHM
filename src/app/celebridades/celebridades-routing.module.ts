import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CelebridadesPage } from './celebridades.page';

const routes: Routes = [
  {
    path: '',
    component: CelebridadesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CelebridadesPageRoutingModule {}
