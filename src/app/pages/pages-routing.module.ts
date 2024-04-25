import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';

const routes: Routes = [
  { path: '', redirectTo: '/items', pathMatch: 'full' },
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: 'items',
        loadChildren: () =>
          import('./home/home.module').then(
            (m) => m.HomeModule
          )
      },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
