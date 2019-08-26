import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Lazy2RoutingModule } from './lazy2-routing.module';
import { Lazy2listComponent } from './lazy2list/lazy2list.component';

@NgModule({
  declarations: [Lazy2listComponent],
  imports: [
    CommonModule,
    Lazy2RoutingModule
  ]
})
export class Lazy2Module { }
