import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavigationbarComponent } from './components/navigationbar/navigationbar.component';
import { HomeComponent } from './page/home/home.component';
import { DestinationComponent } from './page/destination/destination.component';
import { PageTemplateComponent } from './components/page-template/page-template.component';
import { MiniNavigatorComponent } from './components/mini-navigator/mini-navigator.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationbarComponent,
    HomeComponent,
    DestinationComponent,
    PageTemplateComponent,
    MiniNavigatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
