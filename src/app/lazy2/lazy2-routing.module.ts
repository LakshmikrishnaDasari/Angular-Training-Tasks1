import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Lazy2listComponent } from './lazy2list/lazy2list.component';

const routes: Routes = [
  {
    path: '',
    component: Lazy2listComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Lazy2RoutingModule { }
