import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboveComponent } from './features/above/above.component';
import { LoginComponent } from './features/login/login.component';
import { ProjectDetailsComponent } from './features/project-details/project-details.component';
import { UsersListComponent } from './features/users-list/users-list.component';
import { AddProjectComponent } from './features/add-project/add-project.component';
import { ProjectsListComponent } from './features/projects-list/projects-list.component';
import { AdminprofileComponent } from './features/adminprofile/adminprofile.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { ContactUsComponent } from './features/contact-us/contact-us.component';
import { PrivacyPolicyComponent } from './features/privacy-policy/privacy-policy.component';

import { authGuard } from './auth.guard'; 

const routes: Routes = [
  { path: '', component: AboveComponent },
{ path: 'login', component: LoginComponent },
  { 
    path: 'dashboard', 
    component: DashboardComponent, 
    canActivate: [authGuard] 
  },
  { 
    path: 'projects-list', 
    component: ProjectsListComponent, 
    canActivate: [authGuard] 
  },
  { 
    path: 'users-list', 
    component: UsersListComponent, 
    canActivate: [authGuard] 
  },
  { 
    path: 'add-project', 
    component: AddProjectComponent, 
    canActivate: [authGuard] 
  },
  
  { 
    path: 'project-details/:id', 
    component: ProjectDetailsComponent, 
    canActivate: [authGuard] 
  },
  
  { 
    path: 'adminprofile', 
    component: AdminprofileComponent, 
    canActivate: [authGuard] 
  },

  { path: 'contact-us', component: ContactUsComponent },
  { path: 'privacy-policy', component: PrivacyPolicyComponent },
  
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }