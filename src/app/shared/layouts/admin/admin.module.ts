import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {USER_ROUTES} from '../user/user.module';
import {AdminComponent} from './admin.component';



@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(USER_ROUTES),
    CommonModule
  ]
})
export class AdminModule { }
export const ADMIN_ROUTES: Routes = [
  { path: '', component: AdminComponent }, // default admin
];
