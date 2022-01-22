import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { AppRoutingModule } from './app-routing.module';
import { EalyCardComponent } from './shared/ealy-card/ealy-card.component';
import { ScholarshipsComponent } from './pages/scholarships/scholarships.component';
import { BaseLayoutComponent } from './shared/layouts/base-layout/base-layout.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { AddScholarshipComponent } from './pages/add-scholarship/add-scholarship.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    EalyCardComponent,
    ScholarshipsComponent,
    BaseLayoutComponent,
    SidebarComponent,
    AddScholarshipComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
