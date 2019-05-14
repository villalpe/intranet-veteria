import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './components/main/main.component';
import { AddComponent } from './components/add/add.component';
import { ListComponent } from './components/list/list.component';
import { EditComponent } from './components/edit/edit.component';
import { SidemenuComponent} from './components/sidemenu/sidemenu.component';
//import { RhComponent } from './components/rh/rh.component';
//import { ErrorComponent } from './components/error/error.component';
//import { CsvimportComponent } from './components/csvimport/csvimport.component';
//Guards
import { AdminGuard } from '../app/services/admin.guard';

const adminRoutes: Routes = [
	{	path: 'admin-panel', component: MainComponent,
		canActivate: [AdminGuard],
		children: [
			//{path: '', redirectTo: 'admin-panel', pathMatch: 'full'},
			{path: 'sidemenu', component: SidemenuComponent},
			{path: 'listado', component: ListComponent},
			{path: 'crear', component: AddComponent},
			{path: 'editar/:id', component: EditComponent}
			//{path: 'rh', components: RhComponent}
		]
	},
	{path: 'listado-del-panel', component: ListComponent},
];

@NgModule({
  imports: [RouterModule.forChild(adminRoutes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }