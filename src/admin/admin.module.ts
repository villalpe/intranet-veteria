import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
//import { EditorModule } from '@tinymce/tinymce-angular';
import { HttpModule } from '@angular/http';

//Importar nuestro nuevo modulo de rutas
import { AdminRoutingModule } from './admin-routing.module';

import { MainComponent } from './components/main/main.component';
import { AddComponent } from './components/add/add.component';
import { ListComponent } from './components/list/list.component';
import { EditComponent } from './components/edit/edit.component';
import { RhComponent } from './components/rh/rh.component';
import { SidemenuComponent} from './components/sidemenu/sidemenu.component';
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
    SearchPipe
    //CsvimportComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    //EditorModule,
    AdminRoutingModule,
    HttpModule,
    BrowserAnimationsModule
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
    RhComponent
    //ErrorComponent
    ]
})
export class AdminModule { }