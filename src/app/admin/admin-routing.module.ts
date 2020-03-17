import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { IndexComponent } from './pages/index/index.component';


const routes: Routes = [
  {
    path:'',
    component: AdminLayoutComponent,
    children: [
      {
        path:'', component:IndexComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AdminRoutingModule { }
