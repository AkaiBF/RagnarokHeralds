import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {WarframesComponent} from './components/warframes/warframes.component'
import {LoginComponent} from './components/login/login.component'


const routes: Routes = [
{	path:'home', component:WarframesComponent	},
{	path: '', component: WarframesComponent	},
{	path: 'login', component: LoginComponent },
{	path:'**', pathMatch: 'full', redirectTo: ''}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
