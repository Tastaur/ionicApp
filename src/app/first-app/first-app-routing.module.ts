import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FirstAppPage } from './first-app.page';

const routes: Routes = [
  {
    path: '',
    component: FirstAppPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FirstAppPageRoutingModule {}
