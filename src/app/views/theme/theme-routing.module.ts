import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DeccanComponent } from './deccan/deccan.component';
import { HaripriyaComponent } from './haripriya/haripriya.component';
import { RajashreeComponent } from './rajashree/rajashree.component';
import { IndiaQueenComponent } from './india-queen/india-queen.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Theme'
    },
    children: [
      {
        path: '',
        redirectTo: 'colors'
      },
     
      {
        path: 'haripriya',
        component: HaripriyaComponent,
        data: {
          title: 'Haripriya'
        }
      },
      {
        path: 'rajashree',
        component: RajashreeComponent,
        data: {
          title: 'Rajashree'
        }
      },
      {
        path: 'indiaqueen',
        component: IndiaQueenComponent,
        data: {
          title: 'IndiaQueen'
        }
      },
      {
        path: 'deccan',
        component: DeccanComponent,
        data: {
          title: 'Deccan'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ThemeRoutingModule {}
