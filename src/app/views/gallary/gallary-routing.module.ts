import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GallaryComponent } from './gallary.component';

const routes: Routes = [
  {
    path: '',
    component: GallaryComponent,
    data: {
      title: 'Gallary'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GallaryRoutingModule {}
