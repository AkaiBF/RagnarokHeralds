import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {WarframesComponent} from './components/warframes/warframes.component'
import {PrimariesComponent} from './components/primaries/primaries.component'
import {SecondariesComponent} from './components/secondaries/secondaries.component'
import {MeleesComponent} from './components/melees/melees.component'
import {LoginComponent} from './components/login/login.component'
import {UserHomeComponent} from './components/user-home/user-home.component'
import {UsersComponent} from './components/users/users.component'


const routes: Routes = [
{	path:'home', component:UserHomeComponent	},
{	path: '', component: LoginComponent	},
{	path: 'login', component: LoginComponent },
{	path: 'primaries', component: PrimariesComponent	},
{	path: 'secondaries', component: SecondariesComponent	},
{	path: 'melees', component: MeleesComponent	},
{	path: 'warframes', component: WarframesComponent	},
{	path: 'users', component: UsersComponent	},
{	path:'**', pathMatch: 'full', redirectTo: ''}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
