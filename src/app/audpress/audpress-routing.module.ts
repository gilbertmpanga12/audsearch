import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AudpressComponent} from './audpress/audpress.component';

const routes: Routes = [{
  path: '',
  component: AudpressComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AudpressRoutingModule { }
