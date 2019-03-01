import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AudpressCreatorRoutingModule } from './audpress-creator-routing.module';
import { AudpressCreatorComponent } from './audpress-creator/audpress-creator.component';

@NgModule({
  declarations: [AudpressCreatorComponent],
  imports: [
    CommonModule,
    AudpressCreatorRoutingModule
  ]
})
export class AudpressCreatorModule { }
