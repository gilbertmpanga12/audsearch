import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AudiclesComponent } from './audicles/audicles.component';
import {Routes, RouterModule} from '@angular/router';

const routes: Routes = [{
  path: '',
  component: AudiclesComponent
  }];

@NgModule({
  declarations: [AudiclesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class TopAudiclesModule { }
