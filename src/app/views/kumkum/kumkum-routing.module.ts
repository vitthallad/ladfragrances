import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KumkumComponent } from './kumkum.component';

const routes: Routes = [
  {
    path: '',
    component: KumkumComponent,
    data: {
      title: 'Kumkum'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KumkumRoutingModule {}
