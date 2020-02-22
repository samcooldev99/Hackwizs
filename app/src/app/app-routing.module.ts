import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthGuard} from './utils/gaurds/auth/auth.guard';


const routes: Routes = [
  {
    path: '',
    loadChildren: './main/main.module#MainModule',
    canActivate: [AuthGuard]
  }, {
    path: 'auth',
    loadChildren: './user/user.module#UserModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
