import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Lazy1listComponent} from './lazy1list/lazy1list.component';

const routes: Routes = [
  {
    path: '',
    component: Lazy1listComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Lazy1RoutingModule { }
