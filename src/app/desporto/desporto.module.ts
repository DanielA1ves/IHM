import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DesportoPageRoutingModule } from './desporto-routing.module';

import { DesportoPage } from './desporto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DesportoPageRoutingModule
  ],
  declarations: [DesportoPage]
})
export class DesportoPageModule {}
