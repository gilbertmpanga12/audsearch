import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AudpressRoutingModule } from './audpress-routing.module';
import { AudpressComponent } from './audpress/audpress.component';

@NgModule({
  declarations: [AudpressComponent],
  imports: [
    CommonModule,
    AudpressRoutingModule
  ]
})
export class AudpressModule { }
