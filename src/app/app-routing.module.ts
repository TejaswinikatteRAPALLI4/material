import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Data1Component } from './data1/data1.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [{path:'',component:Data1Component},
  {path:'dashboard',component:DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
