import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './components/main/main.component';
//import { AddComponent } from './components/add/add.component';
import { ListComponent } from './components/list/list.component';
//import { EditComponent } from './components/edit/edit.component';
//import { ErrorComponent } from './components/error/error.component';
//import { CsvimportComponent } from './components/csvimport/csvimport.component';
//Guards
import { AdminGuard } from '../app/services/admin.guard';

const adminRoutes: Routes = [
	{	path: 'admin-panel', 
		component: MainComponent,
		canActivate: [AdminGuard],
		children: [
			{path: '', redirectTo: 'listado', pathMatch: 'full'},
			{path: 'listado', component: ListComponent}
			//{path: 'crear', component: AddComponent},
			//{path: 'editar/:id', component: EditComponent},
			//{path: 'csvimport', component: CsvimportComponent}
		]
	},
	{path: 'listado-del-panel', component: ListComponent},
];

@NgModule({
  imports: [RouterModule.forChild(adminRoutes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }