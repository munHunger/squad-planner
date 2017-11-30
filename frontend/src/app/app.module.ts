import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { AppComponent } from './components/app/app.component';
import { LoginComponent } from './components/login/login.component';
import { EventListComponent } from './components/event/list/event-list.component';

const appRoutes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'events', component: EventListComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EventListComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
