import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages/pages.component';
import { PagesRoutingModule } from './pages/pages-routing.module';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
  },
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    PagesRoutingModule,
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
