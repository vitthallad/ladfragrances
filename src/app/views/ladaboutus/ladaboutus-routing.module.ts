import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LadaboutusComponent } from './ladaboutus.component';

const routes: Routes = [
  {
    path: '',
    component: LadaboutusComponent,
    data: {
      title: 'Ladaboutus'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LadaboutusRoutingModule {}
