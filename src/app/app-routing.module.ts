import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { ServicesComponent } from './components/services/services.component';
import { ContactComponent } from './components/contact/contact.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { BlogpComponent } from './components/blogp/blogp.component';
import { UserEditComponent } from './components/user-edit/user-edit.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

const routes: Routes = [
	{path: '', component: HomeComponent},
	{path: '', redirectTo: 'home', pathMatch: 'full'},
	{path: 'home', component: HomeComponent},
	{path: 'principal', component: PrincipalComponent},
	{path: 'services', component: ServicesComponent},
	{path: 'contact', component: ContactComponent},
	{path: 'login', component: LoginComponent},
	{path: 'register', component: RegisterComponent},
	{path: 'mis-datos', component: UserEditComponent},
	{path: 'sidebar', component: SidebarComponent},
	{path: 'blogp', component: BlogpComponent},
	{path: 'sidebar', component: SidebarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
