import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {WarframesComponent} from './components/warframes/warframes.component'

const routes: Routes = [
{	path:'home', component:WarframesComponent	},
{	path: '', component: WarframesComponent	},
{	path:'**', pathMatch: 'full', redirectTo: ''}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
