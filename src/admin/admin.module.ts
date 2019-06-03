import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
//import { EditorModule } from '@tinymce/tinymce-angular';
import { FileUploadModule } from 'ng2-file-upload';
import { HttpModule } from '@angular/http';
import { FileUploader, FileUploaderOptions, FileItem, ParsedResponseHeaders } from 'ng2-file-upload';

//Importar nuestro nuevo modulo de rutas
import { AdminRoutingModule } from './admin-routing.module';

import { MainComponent } from './components/main/main.component';
import { AddComponent } from './components/add/add.component';
import { ListComponent } from './components/list/list.component';
import { EditComponent } from './components/edit/edit.component';
import { RhComponent } from './components/rh/rh.component';
import { SidemenuComponent} from './components/sidemenu/sidemenu.component';
import { UploadFilesComponent } from './components/uploadfiles/uploadfiles.component';
import { ListFilesComponent } from './components/listfiles/listfiles.component';
import { CommiComponent } from './components/commi/commi.component';
import { NoticiasComponent } from './components/noticias/noticias.component';
import { UploadFileComponent } from './components/upload-file/upload-file.component';
import { DownloadFileComponent } from './components/download-file/download-file.component';
import { UploadCsvComponent } from './components/uploadcsv/uploadcsv.component';
import { IntroCompComponent } from './components/introcomp/introcomp.component';
import { InduccionComponent } from './components/induccion/induccion.component';

//import { ErrorComponent } from './components/error/error.component';
//import { CsvimportComponent } from './components/csvimport/csvimport.component';

//Servicios
import { UserService } from '../app/services/user1.service';
import { AdminGuard } from '../app/services/admin.guard';
import { SearchPipe } from './pipes/search.pipe';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    MainComponent,
    AddComponent,
    ListComponent,
    EditComponent,
    RhComponent,
    SidemenuComponent,
    SearchPipe,
    UploadFilesComponent,
    ListFilesComponent,
    CommiComponent,
    NoticiasComponent,
    UploadFileComponent,
    DownloadFileComponent,
    UploadCsvComponent,
    IntroCompComponent,
    InduccionComponent
    //CsvimportComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    //EditorModule,
    AdminRoutingModule,
    HttpModule,
    BrowserAnimationsModule,
    FileUploadModule
  ],
  providers: [
    UserService,
    AdminGuard
  ],
  exports: [  
    MainComponent,
    AddComponent,
    ListComponent,
    EditComponent,
    RhComponent, 
    SidemenuComponent,
    UploadFilesComponent,
    ListFilesComponent,
    CommiComponent,
    NoticiasComponent,
    UploadFileComponent,
    DownloadFileComponent,
    UploadCsvComponent,
    IntroCompComponent,
    InduccionComponent
    //ErrorComponent
    ]
})
export class AdminModule { }