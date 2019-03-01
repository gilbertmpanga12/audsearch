import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AudpressCreatorRoutingModule } from './audpress-creator-routing.module';
import { AudpressCreatorComponent } from './audpress-creator/audpress-creator.component';
import { NewSerieComponent } from './new-serie/new-serie.component';

@NgModule({
  declarations: [AudpressCreatorComponent, NewSerieComponent],
  imports: [
    CommonModule,
    AudpressCreatorRoutingModule
  ]
})
export class AudpressCreatorModule { }
