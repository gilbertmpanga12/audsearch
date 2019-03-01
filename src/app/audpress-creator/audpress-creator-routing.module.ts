import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AudpressCreatorComponent} from './audpress-creator/audpress-creator.component';

const routes: Routes = [{
path: '',
component: AudpressCreatorComponent

}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AudpressCreatorRoutingModule { }
