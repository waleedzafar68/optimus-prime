import { BrowserModule,Title  } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';
import { registerLocaleData } from '@angular/common';

import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { NgwWowModule } from 'ngx-wow';
import { AppComponent } from './app.component';
import { ServicesComponent } from './services/services.component';
import { CafmComponent } from './cafm/cafm.component';
import { AdvantageComponent } from './advantage/advantage.component';
import { TeamComponent } from './team/team.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
@NgModule({
  declarations: [
    AppComponent,
    ServicesComponent,
    CafmComponent,
    AdvantageComponent,
    TeamComponent,
    ContactComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,    
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
    providers: [
    Title
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
