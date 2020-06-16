import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GandhamComponent } from './gandham.component';

const routes: Routes = [
  {
    path: '',
    component: GandhamComponent,
    data: {
      title: 'Gandham'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GandhamRoutingModule {}
