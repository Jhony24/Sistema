import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsComponentComponentCssComponent } from './layouts/projects-component.component.css/projects-component.component.css.component';
import { Router, RouterModule } from '@angular/router';



@NgModule({
  declarations: [ProjectsComponentComponentCssComponent],
  
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class CoreModule { }
