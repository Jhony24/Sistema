import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ProjectsComponentComponentCssComponent } from './core/layouts/projects-component.component.css/projects-component.component.css.component';
import { allRoutes } from './core/routes/all-routes';

const routes:Routes=[
  {
    path:'',
    component: ProjectsComponentComponentCssComponent ,
    children: allRoutes
  }
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
