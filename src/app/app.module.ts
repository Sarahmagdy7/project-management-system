import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';   
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { AdminprofileComponent } from './features/adminprofile/adminprofile.component';
import { LoginComponent } from './features/login/login.component';
import { AboveComponent } from './features/above/above.component';
import { AddProjectComponent } from './features/add-project/add-project.component';
import { ProjectsListComponent } from './features/projects-list/projects-list.component';
import { ProjectDetailsComponent } from './features/project-details/project-details.component';
import { UsersListComponent } from './features/users-list/users-list.component';
import { ContactUsComponent } from './features/contact-us/contact-us.component';  
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashboardComponent,
    AdminprofileComponent,
    LoginComponent,
    AboveComponent,
    AddProjectComponent,
    ProjectsListComponent,
    ProjectDetailsComponent,
    UsersListComponent,
    ContactUsComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }