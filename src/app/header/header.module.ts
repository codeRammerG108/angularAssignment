import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderRoutingModule } from './header-routing.module';
import { HeaderComponent } from './header.component';
import { HeadComponent } from './head/head.component';


@NgModule({
  declarations: [
    HeaderComponent,
    HeadComponent
  ],
  imports: [
    CommonModule,
    HeaderRoutingModule
  ],
  exports: [
    HeadComponent
  ]
})
export class HeaderModule { }
