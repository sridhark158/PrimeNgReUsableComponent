import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FirstTableComponent } from './first-table/first-table.component';
import { SecondTableComponent } from './second-table/second-table.component';

const routes: Routes = [
  { path: 'first' ,
    component: FirstTableComponent
  },
  {path: 'second' ,
    component: SecondTableComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
