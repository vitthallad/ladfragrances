import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AllProductsComponent } from './all-products.component';

const routes: Routes = [
  {
    path: '',
    component: AllProductsComponent,
    data: {
      title: 'AllProducts'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AllProductsRoutingModule {}
