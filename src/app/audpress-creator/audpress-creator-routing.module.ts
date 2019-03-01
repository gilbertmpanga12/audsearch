import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AudpressCreatorComponent} from './audpress-creator/audpress-creator.component';
import {NewSerieComponent} from './new-serie/new-serie.component';

const routes: Routes = [{
path: '',
component: AudpressCreatorComponent
},
{
  path: 'new-serie',
  component: NewSerieComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AudpressCreatorRoutingModule { }
