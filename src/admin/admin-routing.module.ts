import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './components/main/main.component';
import { AddComponent } from './components/add/add.component';
import { ListComponent } from './components/list/list.component';
import { EditComponent } from './components/edit/edit.component';
import { SidemenuComponent} from './components/sidemenu/sidemenu.component';
import { RhComponent } from './components/rh/rh.component';
import { UploadFilesComponent } from './components/uploadfiles/uploadfiles.component';
import { ListFilesComponent } from './components/listfiles/listfiles.component';
import { CommiComponent } from './components/commi/commi.component';
import { NoticiasComponent } from './components/noticias/noticias.component';
import { UploadFileComponent } from './components/upload-file/upload-file.component';
import { DownloadFileComponent } from './components/download-file/download-file.component';
import { UploadCsvComponent } from './components/uploadcsv/uploadcsv.component';
import { IntroCompComponent } from './components/introcomp/introcomp.component';
import { InduccionComponent } from './components/induccion/induccion.component';
//Guards
import { AdminGuard } from '../app/services/admin.guard';

const adminRoutes: Routes = [
	{	path: 'admin-panel', component: MainComponent,
		//canActivate: [AdminGuard],
		children: [
			{path: '', redirectTo: 'admin-panel', pathMatch: 'full'},
			{path: 'sidemenu', component: SidemenuComponent},
			{path: 'listado', component: ListComponent},
			{path: 'crear', component: AddComponent},
			{path: 'editar/:id', component: EditComponent},
			{path: 'rh', component: RhComponent},
			{path: 'list-encuestas', component: SidemenuComponent},
			{path: 'upload-files', component: UploadFilesComponent},
			{path: 'list-files', component: ListFilesComponent},
			{path: 'commi', component: CommiComponent},
			{path: 'noticias', component: NoticiasComponent},
			{path: 'subir-archivos', component: UploadFileComponent},
			{path: 'bajar-archivos', component: DownloadFileComponent},
			{path: 'subir-csv', component: UploadCsvComponent},
			{path: 'introcomp', component: IntroCompComponent},
			{path: 'induccion', component: InduccionComponent},
		],
	},
	{path: 'listado-del-panel', component: ListComponent},
];

@NgModule({
  imports: [RouterModule.forChild(adminRoutes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }