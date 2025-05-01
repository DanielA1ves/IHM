import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CelebridadesPageRoutingModule } from './celebridades-routing.module';

import { CelebridadesPage } from './celebridades.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CelebridadesPageRoutingModule
  ],
  declarations: [CelebridadesPage]
})
export class CelebridadesPageModule {}
