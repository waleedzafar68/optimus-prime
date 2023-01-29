import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { CafmComponent } from './cafm/cafm.component';
import { AdvantageComponent } from './advantage/advantage.component';
import { TeamComponent } from './team/team.component';
import { ContactComponent } from './contact/contact.component';



const routes: Routes = [


	// default
  { path: 'contact', component: ContactComponent , data: {animation: 'Contact'} },
  { path: 'services', component: ServicesComponent , data: {animation: 'Services'} },
  { path: 'cafm', component: CafmComponent , data: {animation: 'Cafm'} },
  { path: 'advantage', component: AdvantageComponent , data: {animation: 'Advantage'} },
  { path: 'team', component: TeamComponent , data: {animation: 'Team'} },
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent , data: {animation: 'Home'} },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollOffset: [0, 0], scrollPositionRestoration: 'top' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }