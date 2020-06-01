import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FirstAppPageRoutingModule } from './first-app-routing.module';

import { FirstAppPage } from './first-app.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FirstAppPageRoutingModule
  ],
  declarations: [FirstAppPage]
})
export class FirstAppPageModule {}
