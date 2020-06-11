import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import Containers
import { DefaultLayoutComponent } from './containers';

import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';


export const routes: Routes = [
  {
    path: '',
    redirectTo: 'ladaboutus',
    pathMatch: 'full',
  },
  {
    path: '404',
    component: P404Component,
    data: {
      title: 'Page 404'
    }
  },
  {
    path: '500',
    component: P500Component,
    data: {
      title: 'Page 500'
    }
  },
  
  {
    path: '',
    component: DefaultLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'base',
        loadChildren: () => import('./views/base/base.module').then(m => m.BaseModule)
      },
     
      {
        path: 'charts',
        loadChildren: () => import('./views/chartjs/chartjs.module').then(m => m.ChartJSModule)
      },
     
      {
        path: 'ladaboutus',
        loadChildren: () => import('./views/ladaboutus/ladaboutus.module').then(m => m.LadaboutusModule)
      },
      {
        path: 'theme',
        loadChildren: () => import('./views/theme/theme.module').then(m => m.ThemeModule)
      }
     ,{
      path: 'gallary',
      loadChildren: () => import('./views/gallary/gallary.module').then(m => m.GallaryModule)
    }
    ,{
      path: 'contactUs',
      loadChildren: () => import('./views/contact-us/contact-us.module').then(m => m.ContactUsModule)
    },
    {
      path: 'allProducts',
      loadChildren: () => import('./views/all-products/all-products.module').then(m => m.AllProductsModule)
    }
    ]
  },
  { path: '**', component: P404Component }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
