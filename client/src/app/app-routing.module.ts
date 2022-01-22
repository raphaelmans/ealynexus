import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ScholarshipsComponent } from './pages/scholarships/scholarships.component';
import { AddScholarshipComponent } from './pages/add-scholarship/add-scholarship.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'scholarships', component: ScholarshipsComponent },
  { path: 'addScholarship', component: AddScholarshipComponent },

  { path: '', component: LoginComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
